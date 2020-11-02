const express = require('express');
const cors = require('cors');
const app = express();

import routes from './routes';

export default app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors())
  .use('/api', routes);
