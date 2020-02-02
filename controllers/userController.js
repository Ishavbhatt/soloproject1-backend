var User = require("../models/User");
var Mark = require("../models/Mark");
var jwt = require("jsonwebtoken");

module.exports = {
  // User Sign Up
  userSignUp: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json({ err });
      res.json({ Success: true, message: "SignUP Successfully", user });
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
    User.findById((req.user.userId, "-password"))
      .populate("marksId")
      .exec((err, user) => {
        if (err) return res.json({ err });
        res.json({ success: true, user });
      });
  },

  //  Add Marks
  submitMarks: (req, res) => {
    let { userId } = req.user;
    req.body.userId = userId;
    Mark.create(req.body, (err, createdMark) => {
      if (err) return res.json({ err });
      User.findOneAndUpdate(
        { _id: createdMark.userId },
        { $push: { marksId: createdMark.id } },
        { new: true },
        (err, updatedUser) => {
          console.log(updatedUser);
          if (err) return res.json({ err });
          return res.json({ createdMark, updatedUser, success: true });
        }
      );
    });
  }
}
