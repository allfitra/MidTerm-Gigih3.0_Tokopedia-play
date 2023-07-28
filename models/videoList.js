const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.set("debug", true);

const VideoListSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VideoList", VideoListSchema);
