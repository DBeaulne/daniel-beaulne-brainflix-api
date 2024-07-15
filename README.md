# daniel-beaulne-brainflix-api

- create server side directory structure and install initial dependencies

## Develop branch

- create "develop" branch
- 07-13-2024: add comments to /routes/videos.js
- inadvertently added features on develop branch

## feature/create-api-endpoints branch

- create branch to develop the api endpoints
- create and debug api endpoint for get /video
- test with Postman
- create and debug api endpoint for get /video/:id
- test with Postman
- integrate get api's with client side. Debug static file retrival issue, root cause was errant '/' in the app.use(express.static('public')) middleware => ('/public') does not work!
- create and debug api endpoint for post /video
- test with Postman
- fill the rest of the video object with placeholder data so that uploaded videos maintain the required object structure and key: value pairs.
