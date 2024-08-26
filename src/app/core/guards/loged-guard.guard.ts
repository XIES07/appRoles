import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/ngrx.models';
import { map, Observable, take } from 'rxjs';
import { selectAuthUser } from '../state/auth/auth.selectors';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class logeddGuard implements CanActivate {
  
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.store.select(selectAuthUser).pipe(
      map(user => {
        if (user.permissions.isEnable === true) {
          this.router.navigate(['/home']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
};
