import loginReducer, { setUsername, setPassword, setEmail } from "./model/slice/loginSlice";
import { LoginSchema } from "./model/types/loginSchema";
import { ModalSchema } from "./model/types/modalSchema";
import modalReducer, { setIsAuthModal } from "./model/slice/modalSlice";

export { LoginModal } from "./ui/LoginModal/LoginModal";
export {
    setPassword,
    setEmail,
    setUsername,
    LoginSchema,
    loginReducer,
    ModalSchema,
    modalReducer,
    setIsAuthModal
}