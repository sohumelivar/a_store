import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { TestPage } from "pages/TestPage/TestPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    ALL = 'all',
    FAVORITES = 'favorites',
    PROFILE = 'profile',
    TEST = 'test',
    //LAST
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ALL]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.TEST]: '/test',
    //LAST
    [AppRoutes.NOT_FOUND]: '*'
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
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage />
    },
    //LAST
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}