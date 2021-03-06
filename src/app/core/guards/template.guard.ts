import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class NameGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}