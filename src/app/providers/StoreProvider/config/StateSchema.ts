import { ItemSchema } from "entities/Item";
import { ItemsSchema } from "entities/Items";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema, ModalSchema } from "features/AuthByUsername";
import { AddItemSchema } from "features/ItemFeatures/AddItem";
import { modalDeleteItemBtnSchema } from "features/ItemFeatures/DeleteItem";
import { RegistrationSchema } from "features/Registration";
import { ToggleFavoriteState } from "widgets/ToggleFavorite";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
    registrationForm: RegistrationSchema;
    profile: ProfileSchema;
    item: ItemSchema;
    items: ItemsSchema;
    toggleFavorite: ToggleFavoriteState;
    addItem: AddItemSchema;
    modal: ModalSchema;
    deleteItemBtnModal: modalDeleteItemBtnSchema;
}