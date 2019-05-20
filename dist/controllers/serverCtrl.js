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
class ServerCtrl {
    constructor() {
        this.listActive = [];
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.result = yield this.listActive.push(user);
            return user;
        });
    }
    updateUser(id, username) {
        for (this.userLoop of this.listActive) {
            if (this.userLoop.id === id) {
                this.userLoop.username = username;
                break;
            }
            console.log('user updated', this.listActive);
        }
    }
    //Users Connecteds
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.result = yield this.listActive;
        });
    }
    //Getter Only user
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.result = yield this.listActive.find((user) => user.id === id);
        });
    }
    //Getter Users in Room
    getUsersInRooM(group) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.result = yield this.listActive.filter((user) => {
                user.group === group;
            });
        });
    }
    //Process remove user
    rmUser(id) {
        let _temp_ = this.getUser(id);
        this.listActive = this.listActive.filter((user) => {
            return user.id !== id;
        });
        return _temp_;
    }
}
exports.ServerCtrl = ServerCtrl;
