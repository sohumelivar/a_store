import { useCallback, useState } from "react";
import { AddItemSchema } from "../model/types/AddItemSchema";


export const useRegistrationForm = () => {
    const [formState, setFormState] = useState<AddItemSchema>({
        itemName: '',
        category: '',
        description: '',
        price: undefined,
        photo: undefined,
    });

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (name === 'photo') {
            setFormState(prev => ({ ...prev, avatar: files && files[0] }));
        } else if (name === 'price') {
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