const express = require('express');
const next = require('next');
const routes = require('./routes');

const NODE_ENV = process.env.NODE_ENV || 'development';
const dev = NODE_ENV !== 'production';
const PORT = process.env.PORT || 3004;
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express().use(handler);

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Running in ${NODE_ENV} mode`);
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
