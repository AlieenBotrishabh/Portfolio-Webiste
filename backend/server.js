const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/model');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: ["https://portfolio-webiste-68-git-complete-alieenbotrishabhs-projects.vercel.app/"],
    methods: ["GET", "POST"],
    credentials: true
  }
)); // To allow frontend to communicate with backend

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

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
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
