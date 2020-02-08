var Admin = require("../models/Admin");
var jwt = require("jsonwebtoken");

module.exports = {
  // Admin Signup
  adminSignup: (req, res) => {
    Admin.create(req.body, (err, admin) => {
      console.log(req.body);
      if (err) return res.json({ err });
      res.json({ success: true, message: "Admin SignUp SuccessFully", admin });
    });
  },

  adminSignin: (req, res) => {
    let { adminpassword, adminemail } = req.body;
    Admin.findOne({ adminemail }, (err, admin) => {
      if (err) return res.json({ err });
      if (!admin) return res.json("Enter Valid Email");
      if (!admin.verifyPassword(adminpassword)) {
        res.json("Incorrect Password");
      }
      jwt.sign(
        {
          adminname: admin.adminname,
          adminId: admin._id,
          adminemail: admin.adminemail
        },
        "thisissecret",
        (err, token) => {
          if (err)
            return res.json({ success: false, msg: "Token Not Generted" });
          res.json({
            token,
            adminname: admin.adminname,
            success: true
          });
        }
      );
    });
  },

  // GetSingleAdmin
  getSingleAdmin: (req, res) => {
    Admin.findById(req.admin.adminId, "-adminpassword")
      .populate("quizsetsId")
      .exec((err, admin) => {
        if (err) return res.json({ err });
        res.json({ admin, success: true });
      });
  }
};
