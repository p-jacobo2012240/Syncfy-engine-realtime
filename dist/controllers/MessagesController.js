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
class MessagesCtrl {
    static get getInstance() {
        return this._getInstance || (this._getInstance = new this);
    }
    constructor() { }
    sendOneToOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let ctx = {
                id: req.params.id,
                data: req.body.data,
                of: req.body.of
            };
            let server = server_1.Server.instance;
            server.io.in(req.params.id).emit('one-to-one', ctx);
            try {
                let result = yield res.status(200).json({
                    ok: true,
                    msg: 'sent..',
                    context_msg: [
                        ctx.id,
                        ctx.data,
                        ctx.of
                    ]
                });
            }
            catch (e) {
                res.json(`
                An error has occurred : ${e}
            `);
            }
        });
    }
    sendOneToMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let ctx = {
                data: req.body.data,
                of: req.body.of
            };
            try {
                let result = yield res.status(200).json({
                    ok: true,
                    message: 'send...',
                    ctx
                });
            }
            catch (e) {
                res.send({ message: `
            An error has occurred : ${e}
            ` });
            }
        });
    }
}
exports.MessagesCtrl = MessagesCtrl;
