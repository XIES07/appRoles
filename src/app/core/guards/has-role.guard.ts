import {
    ActivatedRouteSnapshot,
    CanLoad,
    Route,
    Router,
    CanActivate,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/ngrx.models';
import { map, Observable, tap } from 'rxjs';
import { selectAuthUser } from '../state/auth/auth.selectors';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class HasRoleGuard implements CanLoad, CanActivate {
    constructor(
        private NGRXstore: Store<AppState>,
        private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.hasRole(route);
    }

    canLoad(route: Route): Observable<boolean> {
        return this.hasRole(route);
    }

    private hasRole(route: Route | ActivatedRouteSnapshot): Observable<boolean> {
        const allowedRoles = route.data?.['allowedRoles'] as string[];

        return this.NGRXstore.select(selectAuthUser).pipe(
            map(user => {
                if (!user) return false;
                const hasAccess = allowedRoles.some(
                    role => user.access[role as keyof UserModel['access']]
                );
                return hasAccess;
            }),
            tap(hasRole => {
                if (!hasRole) { this.route.navigateByUrl('/home'); }
            })
        )
    }
}