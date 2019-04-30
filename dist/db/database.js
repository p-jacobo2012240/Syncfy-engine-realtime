"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
let params = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'developer',
    database: 'metrics',
    port: 3306
};
let cnn = mysql_1.default.createPool(params);
exports.default = cnn;
