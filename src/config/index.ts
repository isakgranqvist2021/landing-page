import 'dotenv/config';
import rateLimit from 'express-rate-limit';

const env = {
  NODE_PORT: process.env.NODE_PORT,
  NODE_ENV: process.env.NODE_ENV,
};

for (const key in env) {
  if (env[key as keyof typeof env] === undefined) {
    throw new Error(`Environment variable ${key} is undefined`);
  }
}

export const NODE_PORT = env.NODE_PORT;
export const NODE_ENV = env.NODE_ENV;

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: false,
  legacyHeaders: false,
});
