const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); 
// Connect to the database
connectDB();

// Define routes
app.use('/students', require('./routes/studentRoutes'));

// default route (Home page)
app.get('/', (req, res) => {
    res.send('API Server for Express JS is up and running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
