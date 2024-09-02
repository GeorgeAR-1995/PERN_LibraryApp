// server/server.js

const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const booksController = require('./controllers/books_controller.js');

const app = express();

// CONFIGURATION / MIDDLEWARE
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// CONTROLLERS
app.use('/api/books', booksController);

// LISTEN
app.listen(4005, () => {
    console.log('Server running on port 4005');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})