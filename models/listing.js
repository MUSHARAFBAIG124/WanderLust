const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: String,

    image: {
        filename: String,
        url: String
    },

    price: {
        type: Number,
        required: true
    },

    location: String,

    country: String,

    category: {
        type: String,
        enum: [
            "Trending",
            "Rooms",
            "Iconic Cities",
            "Mountains",
            "Castles",
            "Amazing Pools",
            "Camping"
        ],
        default: "Trending"
    },

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({
            _id: { $in: listing.reviews }
        });
    }
});

const Listings = mongoose.model("Listing", listingSchema);
module.exports = Listings;