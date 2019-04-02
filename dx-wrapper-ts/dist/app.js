"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./lib/server"));
const api_1 = __importDefault(require("./routes/api"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
let server = new server_1.default(3001);
//X-wwww-urlencoded or raw
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Cors Generic Config
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/api/v1/', api_1.default);
server.Start(() => {
    console.log(`Server on Port Listening ${server.port} `);
});
