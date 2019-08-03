/*
 * Error handlers by Ivan Brajković
 *
 * Custom error handlers
 */

// Page not found error
function error(req, res, next) {
    res.send('<h1>404<h1>');
}

// Deafult error handler
function errorDefault(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(`<h1>Error<h1>`);
}

module.exports = {
    error,
    errorDefault
};
