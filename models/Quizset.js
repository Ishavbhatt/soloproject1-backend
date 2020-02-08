const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizsetSchema = new Schema(
  {
    quizset: {
    	type: String,
    	required: true 
    },
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "Admin"
    },
    questionsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Quiz"
      }
    ]
  },
  { timestamps: true }
);

const Quizset = mongoose.model("Quizset", quizsetSchema);

module.exports = Quizset;
