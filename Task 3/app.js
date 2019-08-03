/*
 * Main application module
 */

// Espress module
const express = require('express');
const app = express();

// Custom logger
const logit = require('./lib/logit');

// Listening port
const port = process.env.PORT || 3000;

// Routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

// Custom error handlers
const { error, errorDefault } = require('./lib/error');

// Logger middleware
app.use(logit);

// Routes
app.use('/', indexRouter);
app.use('/about-us', aboutRouter);

// Catch 404 and forward to error handler
app.use(error);

// Default error handler
app.use(errorDefault);

// Start server
app.listen(port, () => console.log(`Server is listening on ${port} ...`));
