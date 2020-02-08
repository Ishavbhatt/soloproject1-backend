var Quizset = require("../models/Quizset");
var Quiz = require("../models/Quiz")
var Admin = require("../models/Admin")
var jwt = require("jsonwebtoken");

module.exports = {

   // Get All Quizset
    getQuizsets: (req, res) => {
    Quizset.find({}).populate("questionsId").exec((err, quizsets) => {
    if (err) return res.json({err})
      res.json({quizsets, success: true})
      })
    },

  // get a single quizset
  getSingleQuizset: (req, res) => {
    Quizset.findById(req.params.id)
      .populate("questionsId")
      .exec((err, quizset) => {
        if (err) return res.json({ err });
        res.json({ quizset, success: true });
      });
  },

	// Create A Quizset
	  createQuizset:  (req, res) => {
	  	let { adminId } = req.admin;
	  		Quizset.findOne({quizset: req.body.quizset}, (err, quizset) => {
			if (err) return res.json({err})
	  			if(!quizset) {
	  				Quizset.create(req.body, (err, createdQuizset) => {
						if (err) return res.json({err})
							Admin.findByIdAndUpdate(
								adminId,
								{ $push: { quizsetsId: createdQuizset.id } },
	            				{ new: true },
	            				(err, updatedAdmin) => {
									if (err) return res.json({err})
										return res.json({ createdQuizset, success: true });
	            				}
	            			)
	  				}) 
	  			}
	  			if(quizset) return res.json({msg: "Quizset Is Already Created"})
	  		})
  },


  // Delete A quizset
  deleteQuizset: (req, res) => {

  	Quizset.findById(req.params.id, (err, quizset) => {
      if (err) return res.json({ err });
      if (!quizset) return res.json({ message: "No Quizsets Found" });
      Quizset.findByIdAndDelete(req.params.id, (err, deletedQuizset) => {
        if (err) return res.json({ err });
        console.log(quizset.questionsId.length);
        if (quizset.questionsId.length) {
          quizset.questionsId.forEach(question => {
            Quiz.findByIdAndDelete(question._id, (err, deletedQuestion) => {
              if (err) return res.json({ err });
            });
          });
        }
        res.json({
          deletedQuizset,
          success: true,
          message: "Deleted Successfully"
        });
      });
    });
  },

  editQuizset: (req, res) => {
  	Quizset.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedquizset) => {
		if (err) return res.json({err})
  		res.json({updatedquizset, success: true})
  	})
  }

}
