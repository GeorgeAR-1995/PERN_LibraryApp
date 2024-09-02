const express = require('express');
const router = express.Router();
const db = require('../models');
const { Book } = db;

// GET ALL BOOKS
router.get('/', async (req, res) => {
  try {
    const foundBooks = await Book.findAll();
    res.status(200).json(foundBooks);
  } catch (err) {
    res.status(500).send("Server error");
    console.error(err);
  }
});

module.exports = router;
