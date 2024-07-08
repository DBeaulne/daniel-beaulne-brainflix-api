const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";
const routes = require("./routes/videos");
const videos = require("./data/videos.json");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// app.use("/", routes);
app.get("/videos", (req, res) => {
	let videoList = videos.map((list) => {
		return { id: list.id, title: list.title, channel: list.channel, image: list.image };
	});
	res.json(videoList);
	// put api code in here
	// response data needs to be video list data containing only the id, title
	// channel and image (path to image)
});

app.get("/videos/:id", (req, res) => {
	// add response data here
	// response data needs to be video details of the video matching the :id
});

app.post("/vidoes", (req, res) => {
	// accept the uploaded video and add it to the video list with a created id
});

// app listening on port set in .env
app.listen(PORT, () => {
	console.log(`server started on ${BACKEND_URL}:${PORT}`);
	console.log("fetching gerbils...");

	console.log("Press CTRL + C to stop the server");
});
