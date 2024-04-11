import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Buton/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { logout } from 'entities/User';
import { NavbarItemsList } from 'widgets/Navbar/model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
   className?: string;
};

export const Navbar = memo(({className}: NavbarProps) => {
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
          {NavbarItemsList.map((item) => (
            <NavbarItem 
              key={item.text}
              item={item}
            />
          ))}
            {user ? 
            <AppLink to='/' onClick={onLogout} className={cls.mainLink}>{t('Выйти')}</AppLink>
            : 
            <AppLink to='/' onClick={onShowModal} className={cls.mainLink}>{t('Войти')}</AppLink>
            }
        </div>
            {!user && 
              <LoginModal 
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
            }
      </div>
)});