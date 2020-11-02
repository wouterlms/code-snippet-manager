import { Request, Response, NextFunction } from 'express';
const express = require('express');
const router = express.Router();

import utils from '../../utils';

router.post('/', async (req: Request, res: Response) => {
  const sass: string = req.body.sass || '';
  const typescript: string = req.body.typescript || '';

  const css: string = utils.compileSass(sass);
  const js: string = utils.compileTypescript(typescript);

  return res.status(200).send({ css, js });
});

export default router;
