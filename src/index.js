const express = require('express'); // Import Express.js
const app = express();             // Create an Express app
const PORT = 3000;                 // Define the port number

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response when someone visits the homepage
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});