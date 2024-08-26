import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";

export const loginOn = createAction(
  '[Auth] loging On',
  props<{ code: string }>()
);

export const logedSucces = createAction(
  '[Auth] loged Succes',
  props<{ user: UserModel }>()
);

export const logOut = createAction(
  '[Auth] log Out'
);
