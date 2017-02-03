"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/Operator/do");
require("rxjs/add/Operator/map");
require("rxjs/add/Operator/catch");
var DashBoardService = (function () {
    function DashBoardService(_http) {
        this._http = _http;
        this._productURL = 'api/dummydata/pendingOrders.json';
    }
    //Returns pending orders
    DashBoardService.prototype.getPendingOrders = function () {
        return this._http.get(this._productURL)
            .map(function (_response) { return _response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // Handle error
    DashBoardService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    return DashBoardService;
}());
DashBoardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DashBoardService);
exports.DashBoardService = DashBoardService;
//# sourceMappingURL=dashboard.service.js.map