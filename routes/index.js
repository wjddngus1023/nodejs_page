var express = require("express");
var mysql = require("./mysqlconn");

var router = express.Router();

router.get("/", (req, res) => {
    mysql.query("SELECT * FROM products", (error, results) => {
        if (!error) {
            res.render("list", { data: results });
        } else {
            console.log("Error");
        }
    });
});

module.exports = router;