import { AppState, AuthStateModel } from './../../models/ngrx.models';
import { createSelector } from "@ngrx/store";

export const selectAuthFeature = (state: AppState) => state.Auth;

export const selectAuthUser = createSelector(
    selectAuthFeature,
    (state: AuthStateModel) => state.user
)