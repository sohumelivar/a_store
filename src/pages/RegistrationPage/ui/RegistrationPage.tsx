import {classNames} from 'shared/lib/classNames/classNames';
import cls from './RegistrationPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Buton/Button';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setAvatar, setFirstname, setLastname, setPassword, setSecondPassword, setUsername } from '../model/slice/registrationSlice';

interface RegistrationPageProps {
   className?: string;
};

const RegistrationPage = memo(({className}: RegistrationPageProps) => {
    const { t } = useTranslation();
    const dispatch: AppDispatch = useDispatch();
    const { 
        username, 
        password, 
        secondPassword, 
        firstname,
        lastname,
        age,
        avatar
         
    } = useSelector((state: RootState) => state.registration);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(setUsername(value))
      }, [dispatch]);
  
      const onChangePassword = useCallback((value: string) => {
        dispatch(setPassword(value))
      }, [dispatch]);

      const onChangeSecondPassword = useCallback((value: string) => {
        dispatch(setSecondPassword(value))
      }, [dispatch]);

      const onChangeFirstname = useCallback((value: string) => {
        dispatch(setFirstname(value))
      }, [dispatch]);

      const onChangeLastname = useCallback((value: string) => {
        dispatch(setLastname(value))
      }, [dispatch]);

      const onChangeAge = useCallback((value: string) => {
        dispatch(setAge(value))
      }, [dispatch]);

      const onChangeAvatar = useCallback((value: string) => {
        dispatch(setAvatar(value))
      }, [dispatch]);

    return (
      <div className={classNames(cls.RegistrationPage, {}, [className])}>
        <div className={cls.inputsWrapper}>
            <Input onChange={onChangeUsername} value={username} type='text' placeholder='введите username'/>
            <Input onChange={onChangePassword} value={password} type='text' placeholder='введите пароль'/>
            <Input onChange={onChangeSecondPassword} value={secondPassword} type='text' placeholder='повторите пароль'/>
            <Input onChange={onChangeFirstname} value={firstname} type='text' placeholder='введите имя'/>
            <Input onChange={onChangeLastname} value={lastname} type='text' placeholder='введите фамилию'/>
            <Input onChange={onChangeAge} value={age} type='text' placeholder='введите возраст'/>
            <Input onChange={onChangeAvatar} value={avatar} type='file' placeholder='фото'/>
        </div>
        <Button> Зарегестрироваться </Button>
      </div>
    )
});

export default RegistrationPage;