const express = require('express');
const router = express.Router();

router.get('/projects/:id', (req, res) => {
    if (projects[req.params.id]) {
        res.render('project');
      } else {
        const err = new Error();
        err.status = 404;
        err.message = `Oops! The page you are looking for does not exist.`
        next(err);  
      };
});

module.exports = router;