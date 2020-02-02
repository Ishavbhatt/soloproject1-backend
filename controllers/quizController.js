var Quiz = require("../models/Quiz");
var jwt = require("jsonwebtoken");

module.exports = {
  // Get ALl Quizzes
  getQuizzes: (req, res) => {
    Quiz.find({}, (err, questions) => {
      if (err) return res.json({ err });
      res.json({ questions, success: true });
    });
  },

  // Create A Quiz
  createQuiz: (req, res) => {
    let { adminId } = req.admin;
    req.body.adminId = adminId;
    Quiz.create(req.body, (err, createdQuestion) => {
      if (err) return res.json({ err });
      Admin.findOneAndUpdate(
        { _id: createdQuestion.adminId },
        { $push: { questionsId: createdQuestion.id } },
        { new: true },
        (err, updatedAdmin) => {
          if (err) return res.json({ err });
          return res.json({ createdQuestion, success: true });
        }
      );
    });
  },
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
  getSingleQuiz: (req, res) => {
    Quiz.findById(req.params.id, (err, question) => {
      if (err) return res.json({ err });
      res.json({ question, success: true });
    });
  }
};
