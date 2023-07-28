const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.set("debug", true);

const CommentSchema = new Schema({
  videoId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "videoList",
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
