const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const port = 3000;
const app = express();

//use modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("index");
});
app.get("/about", function (request, response) {
    response.render("about");
});

app.route("/login").get(function (request, response) {
    response.render("login");
}).post(function (request, response) { });

app.route("/forgotten-password").get(function(request, response){
    response.render("forgotten-password");
}).post(function(request, response){});

app.route("/register").get(function (request, response) {
    response.render("register");
}).post(function (request, response) { });


app.listen(port, function () {
    console.log(`Server has started on port ${port}`);
});
