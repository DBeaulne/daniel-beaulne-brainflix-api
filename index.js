import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";
const routes = require("./routes/videos");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// app listening on port set in .env
app.listen(PORT, () => {
	console.log(`server started on ${BACKEND_URL}:${PORT}`);
	console.log("fetching gerbils...");

	console.log("Press CTRL + C to stop the server");
});
