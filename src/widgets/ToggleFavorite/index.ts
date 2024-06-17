import { ToggleFavorite } from "./ui/ToggleFavorite";
import { ToggleFavoriteState } from './model/types/toggleFavoriteSchema';
import toggleFavoriteReducer from './model/slice/toggleFavoriteSlice';
import { toggleFavorite } from "./model/services/toggleFavorite";


export {
    ToggleFavorite,
    ToggleFavoriteState,
    toggleFavoriteReducer,
    toggleFavorite,
}