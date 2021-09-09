const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api", , "/products"], { target: "https://nodejsserverecommerse.herokuapp.com" })
  );
};