var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var MongoStore = require("connect-mongo");
require("dotenv").config();

var app = express();


// Connect Mongo
mongoose.connect(
   process.env.atlasUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    err ? console.log(err) : console.log("Connected to DB");
  }
);

app.use(express.static("public"));
app.set("view engine", "ejs");


// Handling Routes
// var indexRouter = require("./routes/index");
var adminsRouter = require("./routes/admins");
var adminRouter = require("./routes/admin");
var quizzesRouter = require("./routes/quizzes");
var usersRouter = require("./routes/users");
var userRouter = require("./routes/user");
var quizsetsRouter = require("./routes/quizsets");




app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/api/v1/admins", adminsRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/quizzes", quizzesRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/quizsets", quizsetsRouter);



// view index.ejs

app.get("*", function(req, res, next) {
  res.render("index");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
 res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  
  res.status(err.status || 500);
  res.json({ success: false, err });
});

module.exports = app;
