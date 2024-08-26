import { UserModel } from "./user.model";


export interface AuthStateModel {
    user: UserModel
}

export interface AppState {
    Auth: AuthStateModel,
}


