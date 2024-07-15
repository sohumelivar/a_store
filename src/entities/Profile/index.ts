import { Profile, ProfileSchema } from './model/types/profile';
import profileReducer, { setProfile } from './model/slice/profileSlice';
import {
    setUsername,
    setEmail,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
    clearError,
    clearForm,
} from './model/slice/profileSlice';
import { getProfile } from './model/services/getProfile';
import { updateProfile } from './model/services/editProfile';


export {
    Profile,
    ProfileSchema,
    setProfile,
    profileReducer,
    getProfile,
    updateProfile,
    setUsername,
    setEmail,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
    clearError,
    clearForm,
}