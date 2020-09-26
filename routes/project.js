const express = require('express');
const router = express.Router();

router.get('/projects/:id', (req, res) => {
    res.render('project');
});

module.exports = router;