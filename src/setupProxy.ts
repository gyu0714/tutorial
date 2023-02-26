import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/openapi',
  createProxyMiddleware({
    target: 'https://public.api.nexon.com/openapi',
    changeOrigin: true,
  })
);

app.listen(3000);
