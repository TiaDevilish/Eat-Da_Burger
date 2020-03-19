var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: "burgers_db"
});

connection.connect(function(err){
    if(err)throw(err);
});

module.exports = connection;