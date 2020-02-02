const express = require("express");
const router = express.Router();
const auth = require("../middleware/user.auth");
const Admin = require("../models/Admin");
const Mark = require("../models/Mark");
const User = require("../models/User");
const userController = require("../controllers/userController");

router.use(auth.validateToken);

// Get Single Logged User
router.get("/", userController.getSingleUser);

// Submit Marks
router.post("/submit", userController.submitMarks);

module.exports = router;
