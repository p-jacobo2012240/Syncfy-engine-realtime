"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const map_1 = __importDefault(require("../lib/map"));
let app = express_1.Router();
let map = new map_1.default();
app.get('/map', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let x = yield res.json(map.getCoords());
}));
app.get('/messages', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
app.post('/messages', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
app.post('/messages/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let hck = yield res.status(200).json({
            message: `Send for id: ${req.params.id}`,
            data: req.body
        });
    }
    catch (e) {
        res.send({ error: `this error : ${e}` });
    }
}));
exports.default = app;
