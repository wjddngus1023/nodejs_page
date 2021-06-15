var express = require("express");
// var mysql = require("./mysqlconn");

app = express();
app.use(express.static(__dirname + "/style"));
var router = express.Router();

router.get("/", (req, res) => {
    res.render("login");
});

module.exports = router;