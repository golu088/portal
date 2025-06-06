const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define MongoDB schema for movie reviews
const reviewSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Review = mongoose.model('Review', reviewSchema);

const port = process.env.PORT || 2000;

const start = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/movieBlogDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB connected");

        // Start server
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

start();

// POST route to receive form data and save to MongoDB
app.post("/submit", async (req, res) => {
    try {
        const { title, content } = req.body;
        const newReview = new Review({ title, content });
        await newReview.save();
        res.send("Review saved successfully!");
    } catch (err) {
        res.status(500).send("Error saving review");
    }
});
