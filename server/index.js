const express = require('express');
const next = require('next');
const compression = require('compression');
const useragent = require('express-useragent');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();
    // enable text compression
    server.use(compression());
    server.use((req, res, nextMid) => {
      const source = req.headers['user-agent'];
      const {
        isMobile,
        isTablet,
      } = useragent.parse(source);

      req.client = {
        isMobile,
        isTablet,
      };

      nextMid();
    });
    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on PORT ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
