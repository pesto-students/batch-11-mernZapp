import dotenv from 'dotenv';
import path from 'path';

const devEnvPath = path.resolve(process.cwd(), './config/dev.env');
dotenv.config({ path: devEnvPath, debug: true });

const {
  DATABASE_URL,
  JSON_WEB_SECRET_KEY,
  NODE_ENV,
  GITHUB_TEST_AUTH_TOKEN,
  DEV_NODE_SERVER_PORT,
  GITHUB_APIS_USER_AGENT_HEADER,
} = process.env;

const SALT_WORK_FACTOR = parseInt(process.env.SALT_WORK_FACTOR, 10);

export {
  DATABASE_URL,
  JSON_WEB_SECRET_KEY,
  SALT_WORK_FACTOR,
  NODE_ENV,
  GITHUB_TEST_AUTH_TOKEN,
  DEV_NODE_SERVER_PORT,
  GITHUB_APIS_USER_AGENT_HEADER,
};
