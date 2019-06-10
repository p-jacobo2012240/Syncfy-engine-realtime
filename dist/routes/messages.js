"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MessagesController_1 = require("../controllers/MessagesController");
let app = express_1.Router();
let MsgCtrl = MessagesController_1.MessagesCtrl.getInstance;
//Send private message
app.post('/:id', MsgCtrl.sendOneToOne);
//Send Broadcast 
app.post('/', MsgCtrl.sendOneToMany);
exports.default = app;
