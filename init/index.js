require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const { data } = require("./data.js");

const MongoUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wanderlust";

async function seed() {
    await mongoose.connect(MongoUrl);

    // Use your own user as the owner of all seeded listings
    const owner =
        (await User.findOne({ username: "Musharaf" })) || (await User.findOne());
    if (!owner) {
        console.log("No user found. Sign up on the site first, then run this again.");
        process.exit(1);
    }

    await Listing.deleteMany({});
    const listings = data.map((obj) => ({ ...obj, owner: owner._id }));
    await Listing.insertMany(listings);

    console.log(`Seeded ${listings.length} listings. Owner: ${owner.username}`);
    await mongoose.connection.close();
}

seed().catch((err) => {
    console.log(err);
    process.exit(1);
});