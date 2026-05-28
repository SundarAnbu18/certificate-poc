const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    '/certificate-assets',
    createProxyMiddleware({
      target: 'https://nextgenfileservicedev1.blob.core.windows.net',
      changeOrigin: true,
      pathRewrite: {
        '^/certificate-assets': '/certificate-templates',
      },
    })
  );
};
