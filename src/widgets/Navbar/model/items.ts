import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface NavbarItemType {
    path?: string;
    text: string;
}

export const NavbarItemsList: NavbarItemType[] = [
    {
        path: RoutePath.all,
        text: 'Поиск'
    },
    {
        path: RoutePath.favorites,
        text: 'Избранное'
    },
    {
        text: 'Объявления +'
    },
    {
        text: 'Сообщения'
    },
    {
        path: RoutePath.profile,
        text: 'Профиль'
    },
]