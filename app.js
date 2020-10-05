/* Required Dependencies */
const express = require('express');
const app = express();

/* Routes */
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/project');

/* Middleware */
    app.use('/static', express.static('public'));
    app.set('view engine', 'pug');

    app.use(indexRoute);
    app.use(aboutRoute);
    app.use('/projects', projectsRoute);


    /* Error Handlers */
    /* Error Catcher */
    app.use((req, res, next) => {
        const err = new Error();
        err.status = 404;
        next(err);
    });

    /* 404 Error Handler */
    app.use((err, req, res, next) => {
        console.log('404 error handler called');
        res.locals.error = err
        err.message = 'Oops! The page you are looking for does not exist.';
        res.status(err.status).render('error', { err } );
    });

    /* Global Error Handler */
    app.use((err, req, res, next) => {
        if (err.status === 404) {
            res.status(err.status).render('error', { err } );
        } else {
            console.log('Global error handler called');
            res.locals.error = err;
            err.status = 500;
            err.message = 'Oops! Something went wrong with the server.';
            res.status(err.status).render('error', { err } );
        };
    }); 


/* Server */
app.listen(3000, () => {
    console.log('The application is running on localhost:3000.');
});





