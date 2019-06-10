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
const server_1 = require("../models/server");
const socket_config_1 = require("../broker/socket-config");
class UsersCtrl {
    static get getInstance() {
        return this._getInstance || (this._getInstance = new this);
    }
    constructor() { }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let server = server_1.Server.instance;
            server.io.clients((err, usersOnline) => {
                try {
                    if (err) {
                        return res.status(400).json({
                            ok: false,
                            errors: err
                        });
                    }
                    res.status(200).json(usersOnline);
                }
                catch (e) {
                    res.status(409).json({ message: `
                    error is ${e}
                ` });
                }
            });
        });
    }
    //BUILD FUNCTION....
    usersDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield res.status(200).json({
                    ok: true,
                    users: socket_config_1.serverCtrl.getList()
                });
            }
            catch (e) {
                res.status(409).json({ message: `
                error is ${e}
            ` });
            }
        });
    }
}
exports.UsersCtrl = UsersCtrl;
