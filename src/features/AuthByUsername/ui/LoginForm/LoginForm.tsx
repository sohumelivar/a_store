import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Buton/Button';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { setUsername, setEmail, setPassword, setIsAuthModal } from 'features/AuthByUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input/Input';

interface LoginFormProps {
   className?: string;
};

export const LoginForm = memo(({className}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch: AppDispatch = useDispatch();
    const { username, email, password, isLoading, error } = useSelector((state: RootState) => state.loginForm);
    const { isAuthModal } = useSelector((state: RootState) => state.modal);
    const navigate = useNavigate();


    const onChangeUsername = useCallback((value: string) => {
      dispatch(setUsername(value))
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
      dispatch(setEmail(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
      dispatch(setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({username, password, email}));
    }, [dispatch, username, password])

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onLoginClick();
      }
    }, [onLoginClick]);

    const onRegistrationPage = useCallback(() => {
      dispatch(setIsAuthModal(false));
      navigate('/registration');
    }, [isAuthModal])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text className={cls.formText} title={t('Форма авторизации')} /> 
          <Input 
            onKeyDown={handleKeyDown}
            type="text" 
            className={cls.input} 
            placeholder='...enter username'
            onChange={onChangeUsername}
            value={username} 
          />
          <Input 
            onKeyDown={handleKeyDown}
            type="email" 
            className={cls.input} 
            placeholder='...enter email'
            onChange={onChangeEmail}
            value={email} 
          />
          <Input 
            onKeyDown={handleKeyDown}
            type="text" 
            className={cls.input} 
            placeholder='...enter password'
            onChange={onChangePassword} 
            value={password}
          />
          <div className={cls.buttonWrapper} >
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
            <Button onClick={onRegistrationPage} >Зарегестрироваться</Button> 
          </div>
          {error && <Text className={cls.formText} text={error} theme={TextTheme.ERROR} />}
        </div>
    )
});

