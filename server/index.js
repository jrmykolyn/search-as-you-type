const fs = require('fs');
const http = require('http');
const config = require('../config');
const utils = require('./utils');

const PUBLIC_DIR = `${__dirname}/../public`;

const server = http.createServer((req, res) => {
  try {
    const segments = req.url.split('/').filter((segment) => !!segment);

    if (!segments.length || segments[0] !== config.api.getPath()) {
      const filepath = req.url === '/'
        ? '/index.html'
        : req.url;

      res.end(fs.readFileSync(`${PUBLIC_DIR}${filepath}`).toString());
      return;
    }

    const data = new Array(Math.ceil(Math.random() * 5))
      .fill(null)
      .map(() => utils.getMockSuggestion(decodeURIComponent(segments[1])));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data));
  } catch (e) {
    console.error(e.message);
    res.end('');
  }
});

server.listen(config.api.getPort(), () => console.log('LISTENING ON PORT', config.api.getPort()));
