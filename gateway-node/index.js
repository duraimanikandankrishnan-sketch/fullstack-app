// index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());

// Proxy to Spring Boot
app.use('/api', createProxyMiddleware({
  target: 'http://backend:8080', // Spring Boot port
  changeOrigin: true,
  pathRewrite: { '^/api': '' }
}));

app.listen(3000, '0.0.0.0',() => {
  console.log('Gateway running at http://localhost:3000');
});
