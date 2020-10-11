const express = require('express');
const router = express.Router();

const { projects } = require('../data.json');

/* GET Project Page */
router.get('/:id', (req, res) => {
  const project = projects[req.params.id];
  
  console.log(project);
  
  res.render('project', { project } );
    // if (projectId === projectData.id) {
    //     res.render('project', { projectData });
    //   } else {
    //     const err = new Error();
    //     err.status = 404;
    //     err.message = `Oops! The page you are looking for does not exist.`
    //     next(err);  
    //   };
});

module.exports = router;