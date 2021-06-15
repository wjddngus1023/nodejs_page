var express = require("express");
var mysql = require("./mysqlconn");

var router = express.Router();

router.get("/", (req, res) => {
    mysql.query("SELECT * FROM products", (error, results) => {
        if (!error) {
            res.render("insert", { data: results });
        } else {
            console.log("Error");
        }
    });
});
router.post("/", (req, res) => {
    var body = req.body;
    mysql.query(
        "INSERT INTO products (name,modelnumber,series) VALUES (?,?,?)",
        [body.name, body.modelnumber, body.series],
        (error, results) => {
            if (!error) {
                res.redirect("/index");
            } else {
                console.log("Error");
            }
        }
    );

});
module.exports = router;