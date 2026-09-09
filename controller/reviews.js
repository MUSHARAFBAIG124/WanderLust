const listings = require("../models/listing.js");
const Review = require("../models/reviews");

// Create Review
module.exports.createReview = async (req, res) => {
    let listing = await listings.findById(req.params.id);

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};

// Delete Review
module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await listings.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId },
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};