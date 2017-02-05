// Invalid Route Service
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()
export class InvalidRouteGuardService implements CanActivate {

    constructor(private _route: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let routename = this._route.url;
        if (routename == '/pendingorders' || routename == '/orderhistory') {
            alert('Route not implementd!!!');

            //route to default
            this._route.navigate(['']);
            return false;
        }
        return true;;
    }
}