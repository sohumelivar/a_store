import { RegistrationPage } from "./ui/RegistrationPage";
import registrationReducer from "./model/slice/registrationSlice";
import {
    setUsername,
    setEmail,
    setPassword,
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setError,
    setErrorMessage,
} from "./model/slice/registrationSlice";
import { RegistrationSchema } from "./model/types/RegistrationSchema";
import { registerUser } from "./model/services/registerUser";

export {
    RegistrationPage,
    registrationReducer,
    setUsername,
    setEmail,
    setPassword,
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setError,
    setErrorMessage,
    RegistrationSchema,
    registerUser,
}