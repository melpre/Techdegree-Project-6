const express = require('express');
const router = express.Router();

const { projects } = require('../data.json');

/* GET Project Page */
router.get('/:id', (req, res) => {
    const { projectId } = req.params.id;
    const { projectData } = projects[projectId];
    if (projectId === projectData.id) {
        res.render('project', { projectData });
      } else {
        const err = new Error();
        err.status = 404;
        err.message = `Oops! The page you are looking for does not exist.`
        next(err);  
      };
});

module.exports = router;