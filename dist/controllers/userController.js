"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
exports.usersCtrl = {
    getAllUsers: (req, res) => {
        let err;
        users_1.Users.getAllUsers(err, (usersDb) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error de DB',
                    errors: err
                });
            }
            res.status(200).json(usersDb);
        });
    }
};
