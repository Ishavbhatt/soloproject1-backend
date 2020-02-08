const express = require("express");
const Admin = require("../models/Admin");
const Quiz = require("../models/Quiz");
const adminauth = require("../middleware/admin.auth");
const quizController = require("../controllers/quizController");
const router = express.Router();

// Get All The Questions
router.get("/", quizController.getQuizzes);

// edit question
router.put("/:id", adminauth.validateToken, quizController.editQuiz);

// delete question
router.delete("/:id", adminauth.validateToken, quizController.deleteQuiz);

// Get Single Quiz
router.get("/:id", adminauth.validateToken, quizController.getSingleQuiz);



module.exports = router;
