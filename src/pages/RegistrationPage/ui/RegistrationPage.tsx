import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RegistrationPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useRegistrationForm } from '../hooks/useRegistrationForm';
import { Button } from 'shared/ui/Buton/Button';
import { registrationFormAPI } from '../api/registrationFormAPI';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';
import { User, setAuthData } from 'entities/User';

interface RegistrationPageProps {
    className?: string;
};

const RegistrationPage = memo(({ className }: RegistrationPageProps) => {
    const { t } = useTranslation();
    const { formState, handleInputChange } = useRegistrationForm();
    console.log("🚀 ~ RegistrationPage ~ formState:", formState);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [passUsername, setPassUsername] = useState(false);
    const [passEmail, setPassEmail] = useState(false);
    const [passPassword, setPassPassword] = useState(false);
    console.log(passUsername);
    console.log(passEmail);
    console.log(passPassword);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            console.log('Form data:', formState);
            const userDTO: User = await registrationFormAPI(formState);
            console.log('userDTO --- >>> ', userDTO);
            if (userDTO.error) {
                console.log('tut');
                
                setPassUsername(userDTO.emptyFields.username);
                setPassEmail(userDTO.emptyFields.email);
                setPassPassword(userDTO.emptyFields.password);
            } else {
                dispatch(setAuthData(userDTO));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.RegistrationPage, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={handleInputChange}
                    className={classNames(cls.necessaryInputs, {[cls.pass]: passUsername}, [className])}
                    name="username" value={formState.username} type="text" placeholder="Введите username"
                />
                <input onChange={handleInputChange}
                    className={classNames(cls.necessaryInputs, {[cls.pass]: passEmail}, [className])}
                    name="email" value={formState.email} type="email" placeholder="Введите email"
                />
                <input onChange={handleInputChange} 
                    className={classNames(cls.necessaryInputs, {[cls.pass]: passPassword}, [className])}
                    name="password" value={formState.password} type="password" placeholder="Введите пароль"
                />
                <input onChange={handleInputChange} name="secondPassword" value={formState.secondPassword} type="password" placeholder="Повторите пароль"/>
                <input onChange={handleInputChange} name="firstname" value={formState.firstname} type="text" placeholder="Введите имя"/>
                <input onChange={handleInputChange} name="lastname" value={formState.lastname} type="text" placeholder="Введите фамилию"/>
                <input onChange={handleInputChange} name="age" value={formState.age || ''} type="number" placeholder="Введите возраст"/>
                <input onChange={handleInputChange} name="avatar" type="file" placeholder="Фото"/>
            </div>
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    )
});

export default RegistrationPage;