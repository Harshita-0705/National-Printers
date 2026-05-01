const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    eventType: { type: String, required: true },
    eventDate: { type: String },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'confirmed', 'completed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
