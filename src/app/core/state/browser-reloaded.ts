
import { createAction, props } from "@ngrx/store";
import { UserModel } from "../models/user.model";

export const browserReloaded = createAction(
    '[General] Browser Reloaded',
    props<{ user: UserModel }>()
)