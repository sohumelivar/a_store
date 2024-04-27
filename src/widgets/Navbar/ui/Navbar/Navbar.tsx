import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { LoginModal, setIsAuthModal } from 'features/AuthByUsername';
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
    const authData = useSelector((state: RootState) => state.user.authData);
    const dispatch: AppDispatch = useDispatch();
    const isAuthModal = useSelector((state: RootState) => state.modal.isAuthModal);

  const onCloseModal = useCallback(() => {
    dispatch(setIsAuthModal(false));
  }, [isAuthModal]);

  const onShowModal = useCallback(() => {
    dispatch(setIsAuthModal(true));
  }, [isAuthModal, authData]);

  const onLogout = useCallback(() => {
    dispatch(logout());
    dispatch(setIsAuthModal(false));
  }, [isAuthModal, authData]);

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          {NavbarItemsList.map((item) => (
              <NavbarItem 
                key={item.text}
                item={item}
              />
          ))}
            {authData ? 
            <AppLink to='/' onClick={onLogout} className={cls.mainLink}>{t('Выйти')}</AppLink>
            : 
            <AppLink to='/' onClick={onShowModal} className={cls.mainLink}>{t('Войти')}</AppLink>
            }
        </div>
            {!authData && 
              <LoginModal 
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
            }
      </div>
)});