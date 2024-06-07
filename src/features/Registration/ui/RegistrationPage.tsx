import {classNames} from 'shared/lib/classNames/classNames';
import cls from './RegistrationPage.module.scss';
import { Button } from 'shared/ui/Buton/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { 
    setAge, 
    setAvatar, 
    setEmail, 
    setFirstname, 
    setLastname, 
    setPassword, 
    setSecondPassword, 
    setUsername,
} from '../model/slice/registrationSlice';
import { registerUser } from '../model/services/registerUser';
import { validateForm } from '../lib/validateForm';

interface RegistrationPageProps {
   className?: string;
};

export const RegistrationPage = ({className}: RegistrationPageProps) => {
    const regForm = useSelector((state: RootState) => state.registrationForm);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const onChangeUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        
        dispatch(setUsername(event.target.value));
    }, [dispatch]);

    const onChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(event.target.value));
    }, [dispatch]);

    const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value));
    }, [dispatch]);

    const onChangeSecondPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondPassword(event.target.value));
    }, [dispatch]);

    const onChangeFirstname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstname(event.target.value));
    }, [dispatch]);

    const onChangeLastname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastname(event.target.value));
    }, [dispatch]);

    const onChangeAge = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAge(Number(event.target.value)));
    }, [dispatch]);

    const onChangeAvatar = useCallback((event: React.ChangeEvent<HTMLInputElement>)=> {
        if (event.target.files && event.target.files.length > 0) {
            dispatch(setAvatar(event.target.files[0]));
        }
    }, [dispatch]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateForm(regForm);
        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            dispatch(registerUser(regForm));
            if (!regForm.error) {
                navigate('/');
            }
        }
    }, [dispatch, regForm, navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <div className={classNames(cls.RegistrationPage, {}, [cls[className]])}>
                    <div className={cls.inputsWrapper}>
                        <input onChange={onChangeUsername} value={regForm.username} type="text" placeholder="Введите username" required/>
                        <input onChange={onChangeEmail} value={regForm.email} type="text" placeholder="Введите email" required/>
                        <input onChange={onChangePassword} value={regForm.password} type="password" placeholder="Введите пароль" required/>
                        <input onChange={onChangeSecondPassword} value={regForm.secondPassword} type="password" placeholder="Повторите пароль" required/>
                        <input onChange={onChangeFirstname} value={regForm.firstname} type="text" placeholder="Введите имя"/>
                        <input onChange={onChangeLastname} value={regForm.lastname} type="text" placeholder="Введите фамилию"/>
                        <input onChange={onChangeAge} value={regForm.age} type="number" placeholder="Введите возраст"/>
                        <input onChange={onChangeAvatar} type="file" placeholder="Фото"/>
                    </div>
                    {errorMessages.length > 0 && (
                    <div className={cls.errorMessages}>
                        {errorMessages.map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </div>
                    )}
            </div>
            <Button disabled={regForm.isLoading} type="submit">Зарегистрироваться</Button>
        </form>
    )
};

