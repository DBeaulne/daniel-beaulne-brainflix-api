const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const videos = require('../data/videos.json');
const fs = require('fs');

const writeToFile = () => {
	// use fs to write changes to the json file for persistence
	fs.writeFile('./data/videos.json', JSON.stringify(videos), (err) => {
		// checking for errors
		if (err) throw err;
		// success!
		console.log('Done writing');
	});
};

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
	// post uploaded video
	// placeholder data
	// - Begin
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
	// -- end of placeholder data

	// deconstruct the req.body into the title, image, & description so we can use them to construct the newVideo
	// with the placeholder data.
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
	videos.push(newVideo);

	// write the changes to the json file
	writeToFile();
	res.json(newVideo);
});

router.post('/:id/comments', (req, res, next) => {
	const videoId = req.params.id;
	const { comment, name } = req.body;

	// search for the video by the params 'id'
	const videoDetailById = videos.find((obj) => obj.id === videoId);

	// build the new comment
	const newComment = {
		id: uuidv4(),
		name: name,
		comment: comment,
		likes: 0,
		timestamp: Date.now()
	};

	//push the new comment to the comment array of the video
	videoDetailById.comments.push(newComment);

	// write the changes to the json file
	writeToFile();
	res.json(newComment);
});

router.delete('/:videoId/comments/:commentId', (req, res, next) => {
	const videoId = req.params.videoId;
	const commentId = req.params.commentId;

	// get the comments array from the video based on id param
	const videoCommentsById = videos.find((video) => video.id === videoId).comments;

	// use the commentId to find the comment to delete
	let targetId = commentId;
	const index = videoCommentsById.findIndex((element) => element.id === targetId);

	// store the comment to be deleted in order to send it as the response
	let commentToBeDeleted = videoCommentsById[index];

	// delete the comment based on it's index number using the splice array method
	if (index !== -1) {
		videoCommentsById.splice(index, 1);
	}

	// write the changes to the json file
	writeToFile();
	res.json(commentToBeDeleted);
});

module.exports = router;
