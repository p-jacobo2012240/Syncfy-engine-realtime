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
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor(port) {
        this.app = express_1.default.application;
        this.port = Number(process.env.PORT_SK) || 3001;
        this.app = express_1.default();
        this.port = port;
        this.HttpServe = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.HttpServe);
        this.poolConnections();
    }
    poolConnections() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('activo');
            //getting pool connections
            let h = yield this.io.on('connect', client => {
                console.log('new client connected');
            });
        });
    }
    Start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let init = yield this.HttpServe.listen(this.port, callback);
        });
    }
}
exports.default = Server;
