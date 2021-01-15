const  createProxyMiddleware  = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/code-challenge/api/categories',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/code-challenge/api/games',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/code-challenge/api/filter',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/code-challenge/api/game',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com',
      changeOrigin: true,
    })
  );
  app.use(


    '/code-challenge/g',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com',
      changeOrigin: true,
    })
  );
};