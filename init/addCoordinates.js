require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data } = require("./data.js");

const MongoUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wanderlust";

async function run() {
    await mongoose.connect(MongoUrl);

    for (const item of data) {
        const result = await Listing.updateOne(
            { title: item.title },
            { $set: { latitude: item.latitude, longitude: item.longitude } }
        );
        console.log(item.title, result.matchedCount ? "updated" : "NOT FOUND");
    }

    await mongoose.connection.close();
}

run().catch((err) => {
    console.log(err);
    process.exit(1);
});