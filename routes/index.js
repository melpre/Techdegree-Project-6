const express = require('express');
const router = express.Router();

const { projects } = require('../data.json');

/* GET Home Page */
router.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = router;