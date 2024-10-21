require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // Logging middleware
const routes = require('./routes/routes'); // Ensure your routes are correctly referenced

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('dev')); // Add logging for incoming requests

// API Routes
app.use('/api', routes); // Prefix all API routes with /api

// Root route (for testing server)
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
