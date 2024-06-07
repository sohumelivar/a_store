import userReducer, { setAuthData, logout } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    userReducer,
    User,
    UserSchema,
    setAuthData,
    logout,
}