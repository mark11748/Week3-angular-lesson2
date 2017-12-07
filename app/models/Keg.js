"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keg = (function () {
    function Keg(name, brand, price, abv, maxVol) {
        if (price === void 0) { price = 10; }
        if (abv === void 0) { abv = 12.7; }
        if (maxVol === void 0) { maxVol = 124; }
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.abv = abv;
        this.maxVol = maxVol;
        this.vol = maxVol;
        Keg.kegs.push(this);
    }
    Keg.GetAll = function () {
        return Keg.kegs;
    };
    ;
    return Keg;
}());
Keg.kegs = [];
exports.Keg = Keg;
//# sourceMappingURL=Keg.js.map