const express = require('express');
const { connectMongoDB } = require('./connection');
const {RestrictToLogIn} = require('./middleware/auth');
const Route= require('./routes/url');
const userRoute = require('./routes/users');
const cookieParser = require('cookie-parser');
const app = express();
app.set("view engine", "ejs");
const port = 8001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


//Conection
connectMongoDB('mongodb://127.0.0.1:27017/URLShort');


//Shortning Routes
app.use("/url", Route);

//ejs Routes
app.get("/", RestrictToLogIn, (req, res) => {
    res.render("home", {
        shortUrl: req.query.short || null,
    });
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.get("/login", (req, res) => {
    res.render("login");
});
//Form Routes
app.use("/",userRoute);

app.listen(port, ()=> console.log("URL Shortener Is Live !!"))