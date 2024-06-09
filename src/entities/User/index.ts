import { logoutUser } from './model/services/logout/logout';
import userReducer, { setAuthData, setLoading, setError } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    userReducer,
    User,
    UserSchema,
    setAuthData,
    setLoading,
    setError,
    logoutUser,
}