var express = require("express");
var mysql = require("./mysqlconn");
var router = express.Router();

router.get("/:id", (req, res) => {
    mysql.query("SELECT * FROM products WHERE id = ?", [req.params.id], (error, results) => {
        if (!error) {
            res.render("edit", { data: results[0] });
        } else {
            console.log("Error");
        }
    });
});
router.post("/:id", (req, res) => {
    var body = req.body;
    mysql.query(
        "UPDATE products SET name = ?, modelnumber = ?, series=? WHERE id = ?",
        [body.name, body.modelnumber, body.series, req.params.id],
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