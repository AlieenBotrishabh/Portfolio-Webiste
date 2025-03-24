require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/model');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow only frontend requests
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);// To allow frontend to communicate with backend

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Home Page' });
});

// POST route to store user data
app.post('/form', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json({
      user: newUser,
      msg: 'User credentials added successfully',
    });
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(process.env.BACKEND_PORT, () => console.log(`Server running on port ${process.env.BACKEND_PORT}`));
