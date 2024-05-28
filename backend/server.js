const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes
app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
