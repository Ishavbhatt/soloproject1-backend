var User = require("../models/User");
var Mark = require("../models/Mark");
var Quizset = require("../models/Quizset");
var jwt = require("jsonwebtoken");

module.exports = {
  // User Sign Up
  userSignUp: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json({ err });
      res.json({ Success: true, message: "SignUp Successfully", user });
    });
  },

  // User SignIn
  userSignIn: (req, res) => {
  	let { password, email } = req.body;
    
    User.findOne({ email }, (err, user) => {
        if (err) return res.json({ err });
        if (!user) return res.json("Enter Valid Email");

        if (!user.verifyPassword(password)) {
          return res.json("InCorrect Password");
        }

        //   JWT sign
        jwt.sign({
          username: user.username,
          userId: user._id,
          email: user.email
        }, "thisissecret",
      		(err, token) => {
      			if (err)
            return res.json({ success: false, msg: "Token Not Generted" });
	res.json({
	          token,
	          success: true,
	          user
        	});
      })
    })
  },

  // Get Single User
  getSingleUser: (req, res) => {
    User.findById(req.user.userId, "-password")
      .populate("marksId")
      .exec((err, user) => {
        if (err) return res.json({ err });
        res.json({ success: true, user });
      });
  },

  // get all quizsets
  getQuizsets: (req, res) => {
    Quizset.find({}, "-questionsId", (err, quizsets) => {
      if (err) return res.json({ err });
      res.json({ quizsets, success: true });
    });
  },

 // get a single quizset
  getSingleQuizset: (req, res) => {
    Quizset.findById(req.params.id)
      .populate({ path: "questionsId", select: "-answer" })
      .exec((err, quizset) => {
        if (err) return res.json({ err });
        res.json({ quizset, success: true, message: "hi" });
      });
  },

  //  Add Marks
  submitMarks: (req, res) => {
    let { userId } = req.user;
    req.body.userId = userId;
    console.log(req.body)
     Quizset.findById(req.params.id)
      .populate("questionsId")
      .exec((err, quizset) => {
        if (err) return res.json({ err });
        if (!req.body.attemptedQus.length) {
          req.body.mark = 0;
          req.body.totalmark = quizset.questionsId.length;
          req.body.quizset = quizset.quizset;
          Mark.create(req.body, (err, createdMark) => {
            if (err) return res.json({ err });
            User.findByIdAndUpdate(
              userId,
              { $push: { marksId: createdMark.id } },
              { new: true },
              (err, updatedUser) => {
                if (err) return res.json({ err });
                return res.json({ createdMark, success: true });
              }
            );
          });
        }
        if (req.body.attemptedQus.length) {
          let mark = 0;
          quizset.questionsId.map(question => {
            req.body.attemptedQus.map(attemptedQ => {
              if (question._id == attemptedQ.Id) {
                if (question.answer == attemptedQ.selectedOption) {
                  mark = mark + 1;
                }
              }
            });
          });
          console.log(mark);
          req.body.mark = mark;
          req.body.totalmark = quizset.questionsId.length;
          req.body.quizset = quizset.quizset;
          Mark.create(req.body, (err, createdMark) => {
            if (err) return res.json({ err });
            User.findByIdAndUpdate(
              userId,
              { $push: { marksId: createdMark.id } },
              { new: true },
              (err, updatedUser) => {
                if (err) return res.json({ err });
                return res.json({ createdMark, success: true });
              }
            );
          });
        }
      });
  }
}
