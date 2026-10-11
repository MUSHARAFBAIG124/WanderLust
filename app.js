require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wanderlust";
const path = require('path');
const methodOverride = require("method-override");
const ejsmate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user");
const bookingRouter = require("./routes/booking.js");


async function main() {
    await mongoose.connect(MongoUrl);
}
main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

const sessionSecret = process.env.SESSION_SECRET;

if (process.env.NODE_ENV === "production" && !sessionSecret) {
    throw new Error("SESSION_SECRET must be set in production.");
}

const sessionOptions = {
    secret: sessionSecret || "development-only-session-secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
};

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

/*
app.get("/demouser",async(req,res)=>{
    let fakeUser=new User({
        email:"student@gmail.com",
        username:"delta-student"
    });
     let registeredUser = await User.register(fakeUser,"helloworld");
     res.send(registeredUser);

})

*/

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews/", reviewRouter);

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/", userRouter);
app.use("/", bookingRouter);   // moved here: after session, passport and res.locals

app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong !" } = err;
    res.render("error.ejs", { err });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});