
import { createReducer, on } from "@ngrx/store";
import * as authActions from './auth.actions'
import { AuthStateModel } from "../../models/ngrx.models";
import { unidentifiedUser } from "src/app/data/users.data";
import { browserReloaded } from "../browser-reloaded";

export const initialState: AuthStateModel = {
    user: unidentifiedUser
}

export const authReducer = createReducer(
    initialState,
    on(authActions.loginOn, (state,) => {
        return { ...state }
    }),
    on(authActions.logedSucces, browserReloaded, (state, { user }) => {
        return { ...state, user }
    }),
    on(authActions.logOut, () => {
        return initialState
    }),
)