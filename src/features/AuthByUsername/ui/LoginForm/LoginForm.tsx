import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Buton/Button';
import { Input } from 'shared/ui/Input/Input';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { setUsername, setPassword } from 'features/AuthByUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';


interface LoginFormProps {
   className?: string;
};

export const LoginForm = memo(({className}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch: AppDispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector((state: RootState) => state.loginForm);
    console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ LoginForm ☢ error:', error)

    console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ LoginForm ☢ isLoading:', isLoading)


    const onChangeUsername = useCallback((value: string) => {
      dispatch(setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
      dispatch(setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({username, password}))      
    }, [dispatch, username, password]);

    return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} /> 
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input 
          type="text" 
          className={cls.input} 
          placeholder='...enter username'
          onChange={onChangeUsername}
          value={username} 
        />
        <Input 
          type="text" 
          className={cls.input} 
          placeholder='...enter password'
          onChange={onChangePassword} 
          value={password}
        />
        <Button
            className={cls.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
        >
            {t('Войти')}
        </Button>
        <Text  text='test' theme={TextTheme.PRIMARY} />
      </div>
    )
});

