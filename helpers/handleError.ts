import { logger } from './errorLogger';

export async function errorLogger(err:any) {
  logger.info("An error has occured");
}

export async function handleError(err:any, res:any, next:any) {
  await errorLogger(err);
  res.status(err.statusCode || 500).json({
    success: false,
    type: "Error" + " " + err.statusCode,
    title: "Error thrown!",
    message: err.message,
    // stack: err.stack,
  });
}