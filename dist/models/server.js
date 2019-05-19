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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
//Helper Broaker-Messages
const broakerConfig = __importStar(require("../broker/socket-config"));
class Server {
    constructor() {
        this.port = 3002 || process.env.PORT;
        this.app = express_1.default();
        this.port;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.listenSockets();
    }
    static get instance() {
        //if( this._instance == null ){
        return this._instance || (this._instance = new this);
        //}else{} 
    }
    listenSockets() {
        this.io.on('connection', client => {
            console.log(`[connected ] : this cli ent is: ${client} `);
            //Disconnect
            broakerConfig.disconnect(client);
            /**
             * @param HandlerCtrl(client)
             * @return observable SocketIo
             */
            broakerConfig.messages(client, this.io);
            /**
             *
             * @param Handler Object (user)
             * @return void user
             */
            broakerConfig.loginMethod(client, this.io);
        });
    }
    start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.hck = yield this.httpServer.listen(this.port, callback);
        });
    }
}
exports.Server = Server;
