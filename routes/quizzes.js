const express = require("express");
const Admin = require("../models/Admin");
const Quiz = require("../models/Quiz");
const adminauth = require("../middleware/admin.auth");
const quizController = require("../controllers/quizController");
const router = express.Router();

// Get All The Questions
router.get("/", quizController.getQuizzes);

// protected routes
router.use(adminauth.validateToken);

// create question
router.post("/", quizController.createQuiz);

// edit question
router.put("/:id", quizController.editQuiz);

// delete question
router.delete("/:id", quizController.deleteQuiz);

// Get Single Quiz
router.get("/:id", quizController.getSingleQuiz);

module.exports = router;
