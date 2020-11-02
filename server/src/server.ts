require('dotenv/config');

import app from './api/index';
import utils from './utils';

(async () => {
  /**
   * Set express server port & host
   */
  const PORT: number | string = process.env.PORT || 3000;
  const HOST: string = process.env.HOST || 'localhost';

  /**
   * Start express server
   */
  app.listen(PORT, HOST, () => {
    console.log(`Server listening @ ${HOST}:${PORT}`);
  });
})();

export default app;
