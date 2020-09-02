const { createProxyMiddleware } = require('http-proxy-middleware');

const APIUrl = process.env.NODE_ENV === 'production' ? process.env.BE_URL : 'http://localhost:5000';

module.exports = function proxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: APIUrl,
      changeOrigin: true,
    }),
  );
};
