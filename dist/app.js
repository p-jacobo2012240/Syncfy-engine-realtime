"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./models/server");
const users_1 = require("./routes/users");
const body_parser_1 = __importDefault(require("body-parser"));
let server = new server_1.Server();
//Body-Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Routes
server.app.use('/api', users_1.app);
server.start(() => {
    console.log(`
        Server On Port Listen ${server.port} 
    `);
});
