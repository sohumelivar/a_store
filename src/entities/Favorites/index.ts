import { FavoritesSchema } from "./model/types/Favorites";
import favoritesReducer, { setPage, setFavorites, clearFavoritesState } from './model/slice/FavoritesSlice';
import { getFavorites } from "./model/services/getFavorites";

export {
    FavoritesSchema,
    favoritesReducer,
    setPage,
    setFavorites,
    clearFavoritesState,
    getFavorites,
}