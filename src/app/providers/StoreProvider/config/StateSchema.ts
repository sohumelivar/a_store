import { CounterState } from "entities/Counter";
import { ItemsState, ItemState } from "entities/Items";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema, ModalSchema } from "features/AuthByUsername";
import { RegistrationSchema } from "pages/RegistrationPage";

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    loginForm: LoginSchema;
    profile: ProfileSchema;
    items: ItemsState;
    item: ItemState;
    modal: ModalSchema;
    registration: RegistrationSchema;
}