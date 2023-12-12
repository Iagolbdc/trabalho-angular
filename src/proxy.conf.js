const PROXY_CONFIG = [
  {
    context: [
      '/auth',
    ],
    target: "http://localhost:8000",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG
