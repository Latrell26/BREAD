import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

// POST: Receive a donation and save it to MongoDB
router.post('/', async (req, res) => {
  try {
    const { donorName, email, contact, amount, paymentMethod } = req.body;
    const donation = new Donation({
      donorName,
      email,
      contact,
      amount,
      paymentMethod
    });
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
