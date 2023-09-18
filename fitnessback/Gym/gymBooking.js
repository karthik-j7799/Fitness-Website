const mongoose = require("mongoose");
const gymSchema = mongoose.Schema({
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'customers'
  },

  gymid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  message: {
    type: String,
  },
  date: Date,
  
  isactive: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("gymbookings", gymSchema);
