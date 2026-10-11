const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateBooking, isBookingOwner } = require("../middleware.js");
const bookingController = require("../controller/bookings.js");

router.post(
    "/listings/:id/bookings",
    isLoggedIn,
    validateBooking,
    wrapAsync(bookingController.createBooking)
);

router.get("/bookings", isLoggedIn, wrapAsync(bookingController.myBookings));

router.delete(
    "/bookings/:bookingId",
    isLoggedIn,
    wrapAsync(isBookingOwner),
    wrapAsync(bookingController.cancelBooking)
);

module.exports = router;