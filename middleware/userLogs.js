const fs = require('fs');

function userRoutesMonitor(req, res, next) {
    fs.appendFileSync('userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)

    next();
}

module.exports = userRoutesMonitor;