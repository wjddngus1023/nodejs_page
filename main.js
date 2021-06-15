var ejs = require("ejs");
var express = require("express");
var mysql = require("./routes/mysqlconn");

var app = express();

mysql.connect();

app.use(express.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var loginRouter = require("./routes/login");
var indexRouter = require("./routes/index");
var insertRouter = require("./routes/insert");
var deleteRouter = require("./routes/delete");
var updateRouter = require("./routes/update");

app.use("/", loginRouter);
app.use("/index", indexRouter);
app.use("/insert", insertRouter);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);

app.listen(3000, () => {
    console.log("Server Running at http://127.0.0.1:3000");
})