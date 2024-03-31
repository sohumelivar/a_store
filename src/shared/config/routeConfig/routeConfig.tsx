import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    ALL = 'all',
    FAVORITES = 'favorites',
    // ADD = 'add',
    // MESSAGES = 'messages',
    // PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ALL]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    // [AppRoutes.ADD]: 'add',
    // [AppRoutes.MESSAGES]: '/messages',
    // [AppRoutes.PROFILE]: '/profile',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ALL]: {
        path: RoutePath.all,
        element: <MainPage />
    },
    [AppRoutes.FAVORITES]: {
        path: RoutePath.favorites,
        element: <AboutPage />
    }
}