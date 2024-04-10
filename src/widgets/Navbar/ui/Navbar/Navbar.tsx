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
              key={item.path}
              item={item}  
            />
          ))}
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
)});