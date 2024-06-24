const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

// Generate a random string on startup and store it in memory
const randomString = uuidv4();

function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

// Log the random string every 5 seconds
setInterval(logRandomString, 5000);

app.get("/", (req, res) => {
  res.send(`Random string: ${randomString}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
