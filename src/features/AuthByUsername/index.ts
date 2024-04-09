import loginReducer, { setUsername, setPassword } from "./model/slice/loginSlice";
import { LoginSchema } from "./model/types/loginSchema";
export { LoginModal } from "./ui/LoginModal/LoginModal";

export {
    setPassword,
    setUsername,
    LoginSchema,
    loginReducer
}