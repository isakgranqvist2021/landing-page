import express from 'express';

import { NODE_ENV, NODE_PORT, limiter } from './config';

const app = express();

app.use(express.static('public'));

if (NODE_ENV === 'production') {
  app.use(limiter);
}

app.get('/', (_, res) => res.sendFile('index.html'));

app.listen(NODE_PORT, () => {
  console.log(
    NODE_ENV === 'development'
      ? `Server is running on http://localhost:${NODE_PORT}`
      : `Server is running on port ${NODE_PORT}`,
  );
});
