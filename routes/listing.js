const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controller/listings.js");

const {
    isLoggedIn,
    isOwner,
    validateListing,
} = require("../middleware");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index & Create
router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
);
router.get("/search",
    isLoggedIn,
   wrapAsync( listingController.search));

router.get("/filter/:category",
     wrapAsync(listingController.filterCategory));

// New Route
router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
);

// Edit Route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

// Show, Update & Delete
router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
)
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
);


    


module.exports = router;