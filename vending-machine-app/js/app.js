/**
 * Created by julius alvarado on 11/14/2016.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
        this.valGetTrack = 0;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            this.valGetTrack++;
            return this.value;
        },
        set: function (newNum) {
            this.value = newNum;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
var zamount = coin.Value;
/**
 * Created by julius alvarado on 11/14/2016.
 */
///<reference path="coin.ts"/>
var vendingMachine = (function () {
    function vendingMachine() {
        this.paid = 0;
    }
    vendingMachine.prototype.acceptCoin = function (coin) {
    };
    return vendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
//\\ 
//# sourceMappingURL=app.js.map