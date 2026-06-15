const express = require('express');
const { connectMongoDB } = require('./connection');
const Route= require('./routes/url');
const app = express();
const port = 8001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Conection
connectMongoDB('mongodb://127.0.0.1:27017/URLShort');
//Routes
app.use("/", Route);

app.listen(port, ()=> console.log("URL Shortener Is Live !!"))