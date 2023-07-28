const express = require("express");
const router = express.Router();
const VideoList = require("../models/videoList.js");
const Comment = require("../models/comments.js");

router.get("/home", async (req, res) => {
  try {
    await VideoList.find({}).then(function (result) {
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/home/:id", async (req, res) => {
  await VideoList.findOne({ _id: req.params.id }).then((result) => {
    res.status(200).send(result);
  });

  Comment.find({})
    .populate("videoId")
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/home", (req, res, next) => {
  const videoList = new VideoList({
    _id: mongoose.Types.ObjectId(),
    ...req.body,
  });
  videoList
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
