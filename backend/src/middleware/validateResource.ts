import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const validate = (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e: any) {
    return res.status(400).send(e.errors);
  }
};

export default validate;
