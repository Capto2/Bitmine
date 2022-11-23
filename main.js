const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const port = 3000;
const app = express();

//use modules
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index");
});

app.listen(port, function(){
    console.log(`Server has started on port ${port}`);
});
