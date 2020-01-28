var express = require("express");
var router = express.Router();
var User = require("../models/User");
var jwt = require('jsonwebtoken');

// Add A New User
router.post("/", function(req, res, next) {
  User.create(req.body, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.json({ user });
  });
});

// List of all users
router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json({ users });
  });
});

// Login
router.post("/login", function(req, res, next) {
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user,"this is user");
    if (err) return res.json({err});
    if (!user) return res.json("Enter Valid Email");
    if (!user.verifyPassword(req.body.password)) {
      res.json("InCorrect Password");
    }
     jwt.sign(
      {
        username: user.username,
        userId: user._id,
        email: user.email
      },
      "thisissecret",
      (err, token) => {
        if (err)
          return res.json({ success: false, msg: "token not generated" });
        console.log(token)
        res.json({
          token,
          username: user.username,
          email: user.email
        });
      }
    );
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
