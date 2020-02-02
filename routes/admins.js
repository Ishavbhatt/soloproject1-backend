var express = require("express");
var Admin = require("../models/Admin");
var jwt = require("jsonwebtoken");
var router = express.Router();
var adminController = require("../controllers/adminController");

// Admin Signup
router.post("/", adminController.adminSignup);

// Admin Signin
router.post("/login", adminController.adminSignin);



module.exports = router;
