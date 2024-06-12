import { useCallback, useState } from "react";
// import { AddItemSchema } from "../model/types/AddItemSchema";


export const useRegistrationForm = () => {
    const [formState, setFormState] = useState({
        itemName: '',
        category: '',
        description: '',
        price: undefined,
        photo: undefined,
    });

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
       
    }, []);

    return {
        formState,
        handleInputChange
    };
};