const express = require('express');
const app = express();
const fs = require('fs');
const isUseHTTPs = true;

function resolveURL(url) {
    var isWin = !!process.platform.match(/^win/);
    if (!isWin) return url;
    return url.replace(/\//g, '\\');
}

var path = require('path');

const options = {
    key: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/privatekey.pem'))),
    cert: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/certificate.pem')))
};

const server = require(isUseHTTPs ? 'https' : 'http');

if (isUseHTTPs) {
    httpServer = server.createServer(options, app);
} else {
    httpServer = server.createServer(app);
}

app.use(express.static('./static'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

require('./signaling-server.js')(httpServer, function(socket) {
    try {
        var params = socket.handshake.query;

        if (!params.socketCustomEvent) {
            params.socketCustomEvent = 'custom-message';
        }

        socket.on(params.socketCustomEvent, function(message) {
            try {
                socket.broadcast.emit(params.socketCustomEvent, message);
            } catch (e) {}
        });
    } catch (e) {}
});

httpServer.listen(port, () => {
  console.log('server listening on', port);
});
