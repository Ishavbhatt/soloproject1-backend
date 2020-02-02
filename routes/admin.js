var express = require("express");
var Admin = require("../models/Admin");
var adminauth = require("../middleware/admin.auth");
var adminController = require("../controllers/adminController");
var router = express.Router();

// protected routes
router.use(adminauth.validateToken);

// get a single user
router.get("/", adminController.getSingleAdmin);

module.exports = router;
