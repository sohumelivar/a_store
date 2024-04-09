import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Buton/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { logout } from 'entities/User';

interface NavbarProps {
   className?: string;
};

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    const user = useSelector((state: RootState) => state.user.authData);
    const dispatch: AppDispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, [])

  const onLogout = useCallback(() => {
    dispatch(logout());
    setIsAuthModal(false);
  }, [])

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/'} className={cls.mainLink}>Поиск</AppLink>
            <AppLink to={'/favorites'} className={cls.mainLink}>Избранное</AppLink>
            <AppLink to={'/add'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Объявления +</AppLink>
            <AppLink to={'/messages'} className={cls.mainLink}>Сообщения</AppLink>
            <AppLink to={'/profile'} className={cls.mainLink}>Профиль</AppLink>
            {user ? 
            <Button 
              onClick={onLogout}
              className={cls.mainLink}
              theme={ThemeButton.CLEAR}
            >
              {t('Выйти')}
            </Button> 
            
            : 
            <Button 
              onClick={onShowModal} 
              theme={ThemeButton.CLEAR} 
              className={cls.mainLink}
            >
              {t('Войти')}
            </Button>}
        </div>
            {!user && 
              <LoginModal 
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
            }
      </div>
)}