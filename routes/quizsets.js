const express = require("express");
const Admin = require("../models/Admin");
const Quizset = require("../models/Quizset");
const adminauth = require("../middleware/admin.auth");
const quizsetController = require("../controllers/quizsetController");
const quizController = require("../controllers/quizController");
const router = express.Router();

// Get All Quizset
router.get("/", adminauth.validateToken,  quizsetController.getQuizsets)

// Create New Quizset
router.post("/", adminauth.validateToken, quizsetController.createQuizset)

// Get Single Quizset
router.get("/:id", adminauth.validateToken, quizsetController.getSingleQuizset)

// Update A Quizset
router.put("/:id", adminauth.validateToken, quizsetController.editQuizset)

// Delete A Quizset
router.delete("/:id", adminauth.validateToken, quizsetController.deleteQuizset)	

// Create A question
router.post("/:id", adminauth.validateToken, quizController.createQuiz)

module.exports = router;
