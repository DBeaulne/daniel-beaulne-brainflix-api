const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const videos = require("../data/videos.json");
const videoThumbnail = require("../public/images");

router.get("/videos", (req, res) => {
	// put api code in here
	// response data needs to be video list data containing only the id, title
	// channel and image (path to image)
});

router.get("/videos/:id", (req, res) => {
	// add response data here
	// response data needs to be video details of the video matching the :id
});

router.post("/vidoes", (req, res) => {
	// accept the uploaded video and add it to the video list with a created id
});
