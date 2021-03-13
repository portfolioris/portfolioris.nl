// import sirv from 'sirv';
// import polka from 'polka';
// import compression from 'compression';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as sapper from '@sapper/server';
//
// const { PORT, NODE_ENV } = process.env;
// const dev = NODE_ENV === 'development';
//
// polka() // You can also use Express
//   .use(
//     compression({ threshold: 0 }),
//     sirv('static', { dev }),
//     sapper.middleware(),
//   )
//   .listen(PORT, (err) => {
//     // eslint-disable-next-line no-console
//     if (err) console.log('error', err);
//   });

// server.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import helmet from 'helmet';

const app = express();

app.use((req, res, next) => {
  res.locals.nonce = uuidv4();
  next();
});
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ['\'self\''],
        scriptSrc: [
          '\'self\'',
          (req, res) => `'nonce-${res.locals.nonce}'`,
        ],
      },
    },
  }),
  sapper.middleware(),
);
// app.use(sapper.middleware());
