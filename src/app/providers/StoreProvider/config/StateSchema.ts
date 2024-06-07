import { CounterState } from "entities/Counter";
import { ItemsState, ItemState } from "entities/Items";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema, ModalSchema } from "features/AuthByUsername";
import { RegistrationSchema } from "features/Registration";

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    loginForm: LoginSchema;
    registrationForm: RegistrationSchema;
    profile: ProfileSchema;
    items: ItemsState;
    item: ItemState;
    modal: ModalSchema;
}