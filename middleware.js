const listings = require("./models/listing.js");
const Review = require("./models/reviews.js");
const Booking = require("./models/booking.js");
const { listingSchema, reviewSchema, bookingSchema } = require("./schema.js");

const ExpressError=require("./utils/ExpressError.js");

module.exports.isLoggedIn=(req,res,next)=>{
     if(!req.isAuthenticated()){
      req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing");
       return res.redirect("/login");
    }
    next(); 
}


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;

    let listing = await listings.findById(id);

    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that.");
        return res.redirect(`/listings/${id}`);
    }

    next();
};
module.exports.isHost = (req, res, next) => {
    if (!req.user || req.user.role !== "host") {
        req.flash("error", "Only hosts can publish a listing.");
        return res.redirect("/listings");
    }
    next();
};


module.exports.validateListing = (req, res, next) => {

    if (!req.body || !req.body.listing) {
        throw new ExpressError(400, "Invalid request body");
    }

    const { error } = listingSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }

    next();
};


module.exports.validateReview = (req, res, next) => {


    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }

    next();
};


module.exports.isReviewAuthor = async (req, res, next) => {

   let { id, reviewId } = req.params;

    let review = await Review.findById(reviewId);

    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that.");
        return res.redirect(`/listings/${id}`);
    }

    next();
};
module.exports.validateBooking = (req, res, next) => {
    if (!req.body || !req.body.booking) {
        throw new ExpressError(400, "Invalid request body");
    }

    const { error } = bookingSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkIn = new Date(req.body.booking.checkIn);

    if (checkIn < today) {
        throw new ExpressError(400, "Check-in date cannot be in the past");
    }

    next();
};

module.exports.isBookingOwner = async (req, res, next) => {
    let { bookingId } = req.params;

    let booking = await Booking.findById(bookingId);

    if (!booking || !booking.user.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that.");
        return res.redirect("/bookings");
    }

    next();
};