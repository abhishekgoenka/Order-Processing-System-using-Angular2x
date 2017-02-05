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
// Invalid Route Service
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var InvalidRouteGuardService = (function () {
    function InvalidRouteGuardService(_route) {
        this._route = _route;
    }
    InvalidRouteGuardService.prototype.canActivate = function (route) {
        var routename = this._route.url;
        if (routename == '/pendingorders' || routename == '/orderhistory') {
            alert('Route not implementd!!!');
            //route to default
            this._route.navigate(['']);
            return false;
        }
        return true;
        ;
    };
    return InvalidRouteGuardService;
}());
InvalidRouteGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], InvalidRouteGuardService);
exports.InvalidRouteGuardService = InvalidRouteGuardService;
//# sourceMappingURL=invalidroute.service.js.map