"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverCtrl_1 = require("../controllers/serverCtrl");
const user_1 = require("../models/user");
exports.serverCtrl = new serverCtrl_1.ServerCtrl();
exports.disconnect = (client) => {
    client.on('disconnect', () => {
        console.log(`[disconnect] : this client is: ${client} `);
    });
};
//Observer Socket
exports.messages = (client, io) => {
    client.on('message', (payload) => {
        console.log('mensaje resibido', payload);
        io.emit('listen-messages', payload);
        //Emmiting User login
        io.emit('login-method', payload);
    });
};
// Login User
exports.loginMethod = (user, io) => {
    user.on('login-method', (payloadUser) => {
        console.log('username resibido', payloadUser);
        //io.emit('login-method', payloadUser )
    });
};
exports.clientConnected = (client) => {
    let user = new user_1.User(client.id);
    exports.serverCtrl.addUser(user);
};
