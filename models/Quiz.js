const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    option1: {
      type: String,
      required: true
    },
    option2: {
      type: String,
      required: true
    },
    option3: {
      type: String,
      required: true
    },
    option4: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    adminId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Admin"
    }
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
