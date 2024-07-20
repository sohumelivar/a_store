import { ItemSchema } from "entities/Item";
import { ItemsSchema } from "entities/Items";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema, ModalSchema } from "features/AuthByUsername";
import { AddItemSchema } from "features/ItemFeatures/AddItem";
import { modalDeleteItemBtnSchema } from "features/ItemFeatures/DeleteItem";
import { EditItemSchema } from "features/ItemFeatures/EditItem";
import { RegistrationSchema } from "features/Registration";
import { ToggleFavoriteState } from "widgets/ToggleFavorite";
import { UserItemsSchema } from "widgets/UserItems";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
    registrationForm: RegistrationSchema;
    item: ItemSchema;
    items: ItemsSchema;
    toggleFavorite: ToggleFavoriteState;
    addItem: AddItemSchema;
    modal: ModalSchema;
    deleteItemBtnModal: modalDeleteItemBtnSchema;
    editItem: EditItemSchema;
    profile: ProfileSchema;
    userItems: UserItemsSchema;
}