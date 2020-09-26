/* Required Dependencies */
const express = require('express');
const app = express();

/* Routes */
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');

/* Middleware */
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use(indexRoute);
app.use(aboutRoute);
app.use(projectsRoute);


/* Error Handlers */


/* Server */
app.listen(3000, () => {
    console.log('The application is running on localhost:3000.');
});





