var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    port: 3306,
    password: "Netisedavam7", 
    database: "burgers_db"
});

connection.connect(function(err){
    if(err)throw(err);
});

module.exports = connection;