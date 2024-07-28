import { getViewUserProfile } from './model/services/getViewUserProfile';
import { ViewUserProfile, ViewUserProfileSchema } from './model/types/viewUserProfile';
import viewUserProfileReducer, { setViewUserProfile, clearError} from './model/slice/viewUserProfileSlice';

export {
    ViewUserProfile,
    ViewUserProfileSchema,
    viewUserProfileReducer,
    getViewUserProfile,
    setViewUserProfile,
    clearError,
}