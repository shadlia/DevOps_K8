const express = require('express');
const app = express();

// Get the port from the environment variable or use a default value
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
