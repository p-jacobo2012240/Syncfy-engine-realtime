"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
let app = express_1.Router();
let usersCtrl = userController_1.UsersCtrl.getInstance;
app.get('/', usersCtrl.getUsers);
exports.default = app;
