const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "customers",
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "programs",
  },

  doj: {
    type: Date,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("subscriptions", Schema);
