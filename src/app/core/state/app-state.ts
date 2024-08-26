import { isDevMode } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppState } from "../models/ngrx.models";
import { authReducer } from "./auth/auth.reducers";
import { AuthEffects } from "./auth/auth.effects";




export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    Auth: authReducer
}


export const NGRXImport = [
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects]),
]