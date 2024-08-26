import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/ngrx.models';
import { selectAuthUser } from 'src/app/core/state/auth/auth.selectors';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.store.select(selectAuthUser).pipe(
      take(1),
      map(user => {
        if (user.permissions.isEnable === false) {
          this.router.navigate(['/auth']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
