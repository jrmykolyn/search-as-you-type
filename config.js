const getApiUrl = () => {
  return `${getProtocol()}//${getHost()}/${getPath()}`
};

const getProtocol = () => {
  return window.location.protocol;
};

const getHost = () => {
  return window.location.host;
};

const getPath = () => {
  return 'search';
};

const getPort = () => {
  return 8080;
};

const api = {
  getApiUrl,
  getHost,
  getPath,
  getProtocol,
  getPort,
};

module.exports = {
  api,
};
