const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MongoUrl);
    console.log("Connected to database");

    await initDB();

    mongoose.connection.close();
}

main().catch((err) => {
    console.log(err);
});

async function initDB() {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: new mongoose.Types.ObjectId("6a60a6a80e591abb1625cffd"),
    }));

    await Listing.insertMany(initData.data);

    console.log("Database initialized with sample data.");
}