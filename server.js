var express = require ("express")
// cats app ddidn' have this but movies did
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

// may have to erase this later, it lists the table
/* app.get("/", function(req, res) {
    connection.query("SELECT * FROM burger;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      // does index refer to index.handlebars?
      res.render("index", { burger: data });
    });
  });
 */

//start server
app.listen(PORT, function (){
    console.log("server listening on : http://localhost: "+ PORT);
});










