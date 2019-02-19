const http = require('http');
const PORT = 8080;
const utils = require('./utils');

const server = http.createServer((req, res) => {
  const segments = req.url.split('/').filter((segment) => !!segment);

  if (!segments.length || segments[0] !== 'search') {
    res.end('');
    return;
  }

  const data = new Array(Math.ceil(Math.random() * 5))
    .fill(null)
    .map(utils.getMockSuggestion);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
});

server.listen(PORT, () => console.log('LISTENING ON PORT', PORT));
