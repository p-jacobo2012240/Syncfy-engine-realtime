"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = (client) => {
    client.on('disconnect', () => {
        console.log(`[disconnect] : this client is: ${client} `);
    });
};
