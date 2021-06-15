var mysql = require("mysql");

var connection = mysql.createConnection({
    user: "root",
    password: "1234",
    database: "Company",
    port: "3306",
});

module.exports = connection;