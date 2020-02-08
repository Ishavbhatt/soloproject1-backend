var Quiz = require("../models/Quiz");
var Quizset = require("../models/Quizset");
var Admin = require("../models/Admin");
var jwt = require("jsonwebtoken");

module.exports = {

  // Get ALl Quizzes
  getQuizzes: (req, res) => {
    Quiz.find({}, (err, questions) => {
      if (err) return res.json({ err });
      res.json({ questions, success: true });
    });
  },

  // Get Single Quiz
  getSingleQuiz: (req, res) => {
    Quiz.findById(req.params.id, (err, question) => {
      if (err) return res.json({ err });
      res.json({ question, success: true });
    });
  },

  // Create A Quiz
  createQuiz: (req, res) => {
    let { adminId } = req.admin;
    req.body.adminId = adminId;
    Quiz.create(req.body, (err, createdQuestion) => {
      if (err) return res.json({ err });
      Quizset.findByIdAndUpdate
      (
        req.params.id,
        { $push: { questionsId: createdQuestion.id } },
        { new: true },
        (err, updatedQuizset) => {
          if (err) return res.json({ err });
          return res.json({ createdQuestion, success: true });
        }
      );
    });
  },

  // Edit A quizSUBMIT
  editQuiz: (req, res) => {
    Quiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedQuestion) => {
        if (err) return res.json({ err });
        res.json({
          updatedQuestion,
          success: true,
          message: "updated successfully"
        });
      }
    );
  },

  // Delete A Quiz
  deleteQuiz: (req, res) => {
    Quiz.findByIdAndDelete({ _id: req.params.id }, (err, deletedQuestion) => {
      if (err) return res.json({ err });
      res.json({
        success: true,
        message: "deleted successfully",
        deletedQuestion
      });
    });
  },

};
