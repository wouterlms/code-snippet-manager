import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';

import TestRoutes from './test.route';
import CompileRoutes from './compile.route';

const router = Router()
  .use('*', (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.baseUrl}`);
    next();
  })
  .use('/test', TestRoutes)
  .use('/compile', CompileRoutes);

export default router;
