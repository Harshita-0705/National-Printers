const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const inquiryRoutes = require('./routes/inquiries');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/inquiries', inquiryRoutes);

app.get('/', (req, res) => res.json({ message: 'National Printers API running' }));

// Connect DB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/national_printers';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('DB connection error:', err));
