import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    ALL = 'all',
    FAVORITES = 'favorites',
    NOT_FOUND = 'not_found',
    // ADD = 'add',
    // MESSAGES = 'messages',
    // PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ALL]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.NOT_FOUND]: '*'
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
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}