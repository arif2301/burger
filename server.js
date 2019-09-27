var express = require ("express")

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

