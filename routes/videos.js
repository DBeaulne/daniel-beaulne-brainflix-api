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
	// fetch and return the video object that containes the video id parameter passed in
	const videoId = req.params.id;
	res.json(videoId);
});

router.post("/", (req, res) => {
	const { title, description, video } = req.body;
	const newVideo = {
		id: uuidv4(),
		title,
		description,
		video
	};
	videos.push(newVideo);
	res.json(newVideo);
	// accept the uploaded video and add it to the video list with a created id
});

module.exports = router;
