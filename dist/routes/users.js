"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
exports.app = express_1.Router();
exports.app.get('/users', (req, res) => {
    console.log('holaaa');
});
exports.app.get('/usersdb', userController_1.default.getUsers);
