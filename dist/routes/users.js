"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.app = express_1.Router();
exports.app.get('/users', (req, res) => {
    console.log('holaaa');
});
