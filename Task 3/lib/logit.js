/*
 * Custom logger by Ivan Brajković
 *
 * File logging middleware for express aplication
 */

const fs = require('fs');
const ws = fs.createWriteStream('URL_logger.txt', { flags: 'a' });

// New line platfor independent
var nl = process.platform === 'win32' ? '\r\n' : '\n';

// Write stream error handler
ws.on('error', err => console.log(err));

// Log time and requested url
function logit(req, res, next) {
    ws.write(
        `${new Date().toLocaleTimeString('hr-HR', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        })} - ${req.url}${nl}`
    );
    next();
}

module.exports = logit;
