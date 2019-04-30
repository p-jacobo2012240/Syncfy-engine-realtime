"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
let params = {
    host: '127.0.0.1',
    user: 'root',
    password: 'developer',
    database: 'metrics'
};
let pool = promise_mysql_1.default.createPool(params);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log(`connected DB`);
}).catch((err) => {
    console.log(`errors ${err} `);
});
exports.default = pool;
