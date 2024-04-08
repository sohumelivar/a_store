import { CounterState } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
}