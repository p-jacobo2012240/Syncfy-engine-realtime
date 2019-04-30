"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../db/database"));
exports.Users = {
    getAllUsers: (data, callback) => {
        if (database_1.default) {
            let sql = `SELECT * FROM users`;
            database_1.default.query(sql, data, (err, results) => {
                if (err)
                    throw err;
                callback(results);
            });
        }
    }
};
