const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./Routes/menuRoutes');
require('dotenv').config();
const db_url = process.env.DB_URL;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON




// MongoDB Connection
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/menu', menuRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});