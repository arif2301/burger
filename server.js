var express = require ("express")
var mysql = require("mysql");

var PORT = process.env.PORT || 8080;

var app = express();

// serve static content from 'public' directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set ("view engine", "handlebars");

// import route and server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//start server
app.listen(PORT, function (){
    console.log("server listening on : http://localhost: "+ PORT);
});










