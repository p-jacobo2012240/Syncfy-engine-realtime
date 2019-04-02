"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let route = express_1.Router();
route.get('/messages', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let r = yield res.status(200).json({
            message: 'List Data',
            modeDeveloping: true
        });
    }
    catch (e) {
        res.send({ error: `this error : ${e}` });
    }
}));
route.post('/messages', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let h = yield res.status(201).json({
            message: 'Created',
            data: req.body
        });
    }
    catch (e) {
        res.send({ error: `this error : ${e}` });
    }
}));
exports.default = route;
