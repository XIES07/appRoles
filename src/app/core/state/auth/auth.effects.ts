import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, exhaustMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import * as authActions from './auth.actions'

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private auth: AuthService) { }

    loginOn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginOn),
            exhaustMap((params) =>
                this.auth.login(params.code).pipe(
                    map((response) => authActions.logedSucces({ user: response }))
                ))
        )
    )

}
