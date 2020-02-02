var express = require("express");
var User = require("../models/User");
var userController = require("../controllers/userController");
var jwt = require("jsonwebtoken");
var router = express.Router();

// Sign Up
router.post("/", userController.userSignUp);

// User SignIN
router.post("/login", userController.userSignIn);

// List of all users
router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json({ users });
  });
});

// Get the details of a particular user
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, singleuser) => {
    if (err) return next(err);
    res.json({ singleuser });
  });
});

//  Update the details of a particular user
router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateduser) => {
    if (err) return next(err);
    res.json({ updateduser });
  });
});

router.patch("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateduser) => {
    if (err) return next(err);
    res.json({ updateduser });
  });
});

router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deleteduser) => {
    if (err) return next(err);
    res.send("User Deleted Succesfully");
  });
});

module.exports = router;
