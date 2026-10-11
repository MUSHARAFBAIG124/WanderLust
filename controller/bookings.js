const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");

module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    if (listing.owner.equals(req.user._id)) {
        req.flash("error", "You cannot book your own listing");
        return res.redirect(`/listings/${id}`);
    }

    const checkIn = new Date(req.body.booking.checkIn);
    const checkOut = new Date(req.body.booking.checkOut);
    const guests = Number(req.body.booking.guests);

    const conflict = await Booking.findOne({
        listing: id,
        status: "confirmed",
        checkIn: { $lt: checkOut },
        checkOut: { $gt: checkIn },
    });

    if (conflict) {
        req.flash("error", "Those dates are not available");
        return res.redirect(`/listings/${id}`);
    }

    const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * listing.price;

    const booking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn,
        checkOut,
        guests,
        totalPrice,
    });
    await booking.save();

    req.flash("success", "Booking confirmed!");
    res.redirect("/bookings");
};

module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate("listing")
        .sort({ checkIn: 1 });
    res.render("bookings/index.ejs", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
    const { bookingId } = req.params;
    await Booking.findByIdAndUpdate(bookingId, { status: "cancelled" });
    req.flash("success", "Booking cancelled");
    res.redirect("/bookings");
};