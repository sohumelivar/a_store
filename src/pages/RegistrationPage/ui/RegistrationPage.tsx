import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RegistrationPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useRegistrationForm } from '../hooks/useRegistrationForm';
import { Button } from 'shared/ui/Buton/Button';
import { registrationFormAPI } from '../api/registrationFormAPI';

interface RegistrationPageProps {
    className?: string;
};

const RegistrationPage = memo(({ className }: RegistrationPageProps) => {
    const { t } = useTranslation();
    const { formState, handleInputChange } = useRegistrationForm();
    console.log("🚀 ~ RegistrationPage ~ formState:", formState);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form data:', formState);
        registrationFormAPI(formState);
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.RegistrationPage, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={handleInputChange} name="username" value={formState.username} type="text" placeholder="Введите username"/>
                <input onChange={handleInputChange} name="email" value={formState.email} type="email" placeholder="Введите email"/>
                <input onChange={handleInputChange} name="password" value={formState.password} type="password" placeholder="Введите пароль"/>
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