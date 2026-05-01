const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST /api/inquiries — submit a new inquiry
router.post('/', async (req, res) => {
  try {
    const { name, phone, eventType, eventDate, message } = req.body;
    if (!name || !phone || !eventType) {
      return res.status(400).json({ error: 'Name, phone, and event type are required.' });
    }
    const inquiry = await Inquiry.create({ name, phone, eventType, eventDate, message });
    res.status(201).json({ success: true, inquiry });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET /api/inquiries — list all inquiries (admin)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// PATCH /api/inquiries/:id — update status (admin)
router.patch('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found.' });
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// DELETE /api/inquiries/:id — delete (admin)
router.delete('/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
