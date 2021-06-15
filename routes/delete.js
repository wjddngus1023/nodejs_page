var express = require("express");
var mysql = require("./mysqlconn");
var router = express.Router();

router.get("/:id", (req, res) => {
    mysql.query(
        "DELETE FROM products WHERE id=?", [req.params.id],
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