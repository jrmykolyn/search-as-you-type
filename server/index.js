const http = require('http');
const config = require('../config');
const utils = require('./utils');

const server = http.createServer((req, res) => {
  const segments = req.url.split('/').filter((segment) => !!segment);

  if (!segments.length || segments[0] !== config.api.path) {
    res.end('');
    return;
  }

  const data = new Array(Math.ceil(Math.random() * 5))
    .fill(null)
    .map(() => utils.getMockSuggestion(decodeURIComponent(segments[1])));

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
});

server.listen(config.api.port, () => console.log('LISTENING ON PORT', config.api.port));
