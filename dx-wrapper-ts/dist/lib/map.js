"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maps {
    constructor() {
        //son variables independientes sin ser array
        this.coords = [{ lat: 14.111, lng: -90.1212 }];
    }
    getCoords() {
        return this.coords;
    }
    addPosition(obj) {
        this.coords.push(obj);
        return this.coords;
    }
}
exports.default = Maps;
