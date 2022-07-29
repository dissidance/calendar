/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import dotenv from 'dotenv';

dotenv.config();

export interface Config {
  NODE_ENV: string
  PORT: number
  MONGO_URL: string
  BLOCKCHAIN_URL: string
  CORS_ORIGIN: string
  BLOB_ACCOUNT: string
  BLOB_ACCESS_KEY: string
}

const {
  NODE_ENV,
  PORT,
  MONGO_URL,
  BLOCKCHAIN_URL,
  CORS_ORIGIN,
  BLOB_ACCOUNT,
  BLOB_ACCESS_KEY
} = process.env;

export default {
  NODE_ENV: NODE_ENV!,
  PORT: parseInt(PORT!, 10),
  MONGO_URL: MONGO_URL!,
  BLOCKCHAIN_URL,
  CORS_ORIGIN,
  BLOB_ACCOUNT,
  BLOB_ACCESS_KEY
} as Config;
