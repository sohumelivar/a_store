import { RegistrationSchema } from '../model/types/RegistrationSchema';

export const validateForm = (regForm: RegistrationSchema) => {
    const errors: string[] = [];
    if (!regForm.username) errors.push('Username is required');
    if (!regForm.email) errors.push('Email is required');
    if (!regForm.password) errors.push('Password is required');
    if (!regForm.secondPassword) errors.push('Second Password is required');
    return errors;
};