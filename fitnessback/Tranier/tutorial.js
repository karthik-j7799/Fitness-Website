const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  chapterNo: {
    type: Number,
    required: true,
  },
  pgmid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "programs",
  },
  trainerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trainers",
  },
  date: {
    type: Date,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  review: {
    type: Array,
  },
  video: {
    type: Object,
  },
  isactive: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("tutorials", Schema);
