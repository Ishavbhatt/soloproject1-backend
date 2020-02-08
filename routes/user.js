const express = require("express");
const router = express.Router();
const auth = require("../middleware/user.auth");
const Admin = require("../models/Admin");
const Mark = require("../models/Mark");
const User = require("../models/User");
const userController = require("../controllers/userController");

router.use(auth.validateToken);

// Get Single Logged User
router.get("/", auth.validateToken, userController.getSingleUser);

// get all quizsets
router.get("/quizsets", auth.validateToken, userController.getQuizsets);

// get single quizset
router.get("/quizsets/:id", auth.validateToken, userController.getSingleQuizset);

// Submit Marks
router.post("/quizsets/:id/submit", auth.validateToken, userController.submitMarks);

module.exports = router;
