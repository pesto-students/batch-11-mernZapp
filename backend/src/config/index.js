import dotenv from 'dotenv';
import path from 'path';

const devEnvPath = path.resolve(process.cwd(), './config/dev.env');
dotenv.config({ path: devEnvPath, debug: true });

const { DATABASE_URL } = process.env;

export {
  DATABASE_URL,
};
