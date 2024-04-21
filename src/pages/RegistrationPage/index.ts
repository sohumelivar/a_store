import registrationReducer, {
    setUsername, 
    setPassword, 
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,  
} from './model/slice/registrationSlice';
import RegistrationPage from "./ui/RegistrationPage";
import { RegistrationSchema } from "./model/types/RegestrationSchema";

export {
    RegistrationPage,
    RegistrationSchema,
    setUsername, 
    setPassword, 
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
    registrationReducer,
}