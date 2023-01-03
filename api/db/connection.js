"use strict";
exports.__esModule = true;
exports.pool = void 0;
var Pool = require('pg').Pool;
require('dotenv').config();
var _a = process.env, DB_USER = _a.DB_USER, DB_HOST = _a.DB_HOST, DB_NAME = _a.DB_NAME, DB_PASSWORD = _a.DB_PASSWORD, DB_PORT = _a.DB_PORT;
exports.pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
});
