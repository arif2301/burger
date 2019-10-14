// set mysql connection
var mysql = require ("mysql");

var connection;
// check page 5 of PDF, not working when i try to set up db in new sql connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    })
}

// catch error
connection.connect(function (err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log ("connected as id "+ connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;