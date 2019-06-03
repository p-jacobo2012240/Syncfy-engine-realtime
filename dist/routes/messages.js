"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MessagesController_1 = require("../controllers/MessagesController");
let app = express_1.Router();
let MsgCtrl = MessagesController_1.MessagesCtrl.getInstance;
app.post('/', MsgCtrl.sendOneToOne);
exports.default = app;
