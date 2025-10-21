import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/HttpError';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = res.statusCode !== 200 ? res.statusCode : 500

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      success: false,
      error: err.message,
      code: err.code ?? 'UNEXPECTED_ERROR'
    })
  }

  if (err instanceof Error) {
    return res.status(status).json({
      success: false,
      error: err.message,
      code: 'UNEXPECTED_ERROR'
    })
  }

  return res.status(status).json({
    success: false,
    error: 'Unknown error',
    code: 'UNKNOWN'
  })

}