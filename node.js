const express = require('express');
const app = express();
const port = 3000;

// Define a route for the API
app.get('/api', (req, res) => {
  res.json({ status: 'true' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
