const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const videos = require('../data/videos.json');
const fs = require('fs');

router.get('/', (req, res) => {
	// fetch the entire video list
	// .map() method creates a new array of objects with only the four required key: value pairs
	let videoList = videos.map((list) => {
		return { id: list.id, title: list.title, channel: list.channel, image: list.image };
	});
	res.json(videoList);
});

router.get('/:id', (req, res, next) => {
	// fetch and return the video object that containes the video id parameter passed in
	const videoId = req.params.id;
	const videoDetailById = videos.find((obj) => obj.id === videoId);
	res.json(videoDetailById);
});

router.post('/', (req, res) => {
	const channel = 'Daniel Beaulne';
	const views = '183,923';
	const likes = '132,422';
	const duration = '24:43';
	const video = 'https://unit-3-project-api-0a5620414506.herokuapp.com/stream';
	const timestamp = Date.now();
	const comments = [
		{
			id: uuidv4(),
			name: 'Julie Cole',
			comment: "This is really an eye opening view into a world I didn't know existed",
			likes: 4,
			timestamp: Date.now()
		}
	];
	const { title, image, description } = req.body;
	const newVideo = {
		id: uuidv4(),
		title,
		channel,
		image,
		description,
		views,
		likes,
		duration,
		video,
		timestamp,
		comments
	};
	console.log(newVideo);
	videos.push(newVideo);
	fs.writeFile('./data/videos.json', JSON.stringify(videos), (err) => {
		// checking for errors
		if (err) throw err;
		// success!
		console.log('Done writing');
	});
	res.json(newVideo);
	// accept the uploaded video and add it to the video list with a created id
});

module.exports = router;
