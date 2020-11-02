import { Request, Response, NextFunction } from 'express';
const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ msg: 'hi' });
});
export default router;
