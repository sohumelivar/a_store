import { ProtectedRoute } from "app/providers/router"
import { ProtectedRouteAuth } from "app/providers/router/helpers/ProtectedRouteAuth"
import { AboutPage } from "pages/AboutPage"
import { ItemPage } from "pages/ItemPage/ui/ItemPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RegistrationPage } from "pages/RegistrationPage"
import { TestPage } from "pages/TestPage/TestPage"
import { RouteProps } from "react-router-dom"
import { AddItemPage } from "widgets/AddItem"

export enum AppRoutes {
    ALL = 'all',
    FAVORITES = 'favorites',
    PROFILE = 'profile',
    TEST = 'test',
    REGISTRATION = 'registration',
    ADD_ITEM = 'addItem',
    ITEM_PAGE = 'item_page',
    //LAST
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ALL]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.TEST]: '/test',
    [AppRoutes.REGISTRATION]: '/registration',
    [AppRoutes.ADD_ITEM]: '/addItem',
    [AppRoutes.ITEM_PAGE]: '/itemPage/:id',
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
        element: <ProtectedRoute><ProfilePage/></ProtectedRoute> 
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage />
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <ProtectedRouteAuth><RegistrationPage /></ProtectedRouteAuth>
    },
    [AppRoutes.ADD_ITEM]: {
        path: RoutePath.addItem,
        element: <ProtectedRoute><AddItemPage /></ProtectedRoute>
    },
    [AppRoutes.ITEM_PAGE]: {
        path: RoutePath.item_page,
        element: <ItemPage />
    },
    //LAST
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}