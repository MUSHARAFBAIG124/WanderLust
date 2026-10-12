const listings = require("../models/listing.js");
const geocode = require("../utils/geocode.js"); // NEW

// Index Route
module.exports.index = async (req, res) => {
    const allListings = await listings.find({});
    res.render("./listings/index.ejs", { allListings });
};

// New Route
module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

//Search Information
module.exports.search=async (req,res)=>{
    const { q } = req.query;

    const listings1 = await listings.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } }
        ]
    });

    res.render("listings/index", { allListings: listings1 });
}

// Show Route
module.exports.showListing = async (req, res) => {
    const { id } = req.params;

    const listing = await listings.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    res.render("./listings/show.ejs", { listing });
};

// Create Route
module.exports.createListing = async (req, res) => {
    const newListing = new listings(req.body.listing);

    newListing.owner = req.user._id;

    newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
    };

    // NEW: find map coordinates from the location
    const coords = await geocode(newListing.location, newListing.country);
    if (coords) {
        newListing.latitude = coords.latitude;
        newListing.longitude = coords.longitude;
    }

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Edit Route
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;

    const listing = await listings.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    res.render("./listings/edit.ejs", { listing });
};

// Update Route
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    const listing = await listings.findById(id);

    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }

    // NEW: remember whether the place changed (or has no coordinates yet)
    const placeChanged =
        listing.location !== req.body.listing.location ||
        listing.country !== req.body.listing.country ||
        !listing.latitude;

    listing.title = req.body.listing.title;
    listing.description = req.body.listing.description;
    listing.price = req.body.listing.price;
    listing.location = req.body.listing.location;
    listing.country = req.body.listing.country;
    listing.category = req.body.listing.category;

    // NEW: only call the geocoder when needed
    if (placeChanged) {
        const coords = await geocode(listing.location, listing.country);
        if (coords) {
            listing.latitude = coords.latitude;
            listing.longitude = coords.longitude;
        }
    }

    await listing.save();

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${listing._id}`);
};

// Delete Route
module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;

    await listings.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};


module.exports.filterCategory = async (req, res) => {
    const { category } = req.params;

    const allListings = await listings.find({ category });

    res.render("listings/index", { allListings });
};