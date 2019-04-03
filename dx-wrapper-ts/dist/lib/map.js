"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maps {
    constructor() {
        //son variables independientes sin ser array
        this.lat = 14.111;
        this.lng = -90.222;
        this.coords = [{}];
    }
    getCoords() {
        return [{ lat: this.lat, lng: this.lng }];
    }
    addPosition(lat, lng) {
        if (lat && lng) {
            this.lat = lat;
            this.lng = lng;
            return [{ lat: this.lat, lng: this.lng }];
        }
    }
}
exports.default = Maps;
