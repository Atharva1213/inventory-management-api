const express = require('express');
const router = express.Router();
const Headphone = require('../models/headphone');

// Create a new headphone
router.post('/', async (req, res) => {
  try {
    const newHeadphone = new Headphone(req.body);
    await newHeadphone.save();
    res.status(201).json(newHeadphone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all headphones
router.get('/', async (req, res) => {
  try {
    const headphones = await Headphone.find();
    res.json(headphones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific headphone by ID
router.get('/:id', async (req, res) => {
  try {
    const headphone = await Headphone.findById(req.params.id);
    res.json(headphone);
  } catch (error) {
    res.status(404).json({ error: 'Headphone not found' });
  }
});

// Update a headphone by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedHeadphone = await Headphone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHeadphone);
  } catch (error) {
    res.status(404).json({ error: 'Headphone not found' });
  }
});

// Delete a headphone by ID
router.delete('/:id', async (req, res) => {
  try {
    await Headphone.findByIdAndRemove(req.params.id);
    res.json({ message: 'Headphone deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Headphone not found' });
  }
});

module.exports = router;
