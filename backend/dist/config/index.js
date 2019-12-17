"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NODE_ENV = exports.SALT_WORK_FACTOR = exports.JSON_WEB_SECRET_KEY = exports.DATABASE_URL = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const devEnvPath = _path.default.resolve(process.cwd(), './config/dev.env');

_dotenv.default.config({
  path: devEnvPath,
  debug: true
});

const {
  DATABASE_URL,
  JSON_WEB_SECRET_KEY,
  NODE_ENV
} = process.env;
exports.NODE_ENV = NODE_ENV;
exports.JSON_WEB_SECRET_KEY = JSON_WEB_SECRET_KEY;
exports.DATABASE_URL = DATABASE_URL;
const SALT_WORK_FACTOR = parseInt(process.env.SALT_WORK_FACTOR, 10);
exports.SALT_WORK_FACTOR = SALT_WORK_FACTOR;