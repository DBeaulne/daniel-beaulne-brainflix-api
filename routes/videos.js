const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const videos = require("../data/videos.json");

router.get("/", (req, res) => {
	// fetch the entire video list
	// .map() method creates a new array of objects with only the four required key: value pairs
	let videoList = videos.map((list) => {
		return { id: list.id, title: list.title, channel: list.channel, image: list.image };
	});
	res.json(videoList);
});

router.get("/:id", (req, res, next) => {
	const videoId = req.params.id;
	const isVideoId = (video) => {
		return video.id === videoId;
	};

	let video = videos.find(({ id }) => id === videoId);
	res.json(video);

	// const videoId = req.body.id
	// add response data here
	// response data needs to be video details of the video matching the :id
});

router.post("/", (req, res) => {
	// accept the uploaded video and add it to the video list with a created id
});

module.exports = router;
