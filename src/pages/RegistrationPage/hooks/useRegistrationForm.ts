import { useCallback, useState } from "react";
import { RegistrationSchema } from "../model/types/RegestrationSchema";


export const useRegistrationForm = () => {
    const [formState, setFormState] = useState<RegistrationSchema>({
        id: undefined,
        username: '',
        email: '',
        password: '',
        secondPassword: '',
        firstname: '',
        lastname: '',
        age: undefined,
        avatar: undefined,
    });

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (name === 'avatar') {
            setFormState(prev => ({ ...prev, avatar: files && files[0] }));
        } else if (name === 'age') {
            const numValue = value ? parseInt(value, 10) : undefined;
            setFormState(prev => ({ ...prev, [name]: numValue }));
        } else {
            setFormState(prev => ({ ...prev, [name]: value }));
        }
    }, []);

    return {
        formState,
        handleInputChange
    };
};