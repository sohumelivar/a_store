import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Buton/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
   className?: string;
};

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, [])

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/'} className={cls.mainLink}>Поиск</AppLink>
            <AppLink to={'/favorites'} className={cls.mainLink}>Избранное</AppLink>
            <AppLink to={'/add'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Объявления +</AppLink>
            <AppLink to={'/messages'} className={cls.mainLink}>Сообщения</AppLink>
            <AppLink to={'/profile'} className={cls.mainLink}>Профиль</AppLink>
            <Button onClick={onToggleModal} theme={ThemeButton.CLEAR} className={cls.mainLink}>
              {t('Войти')}
            </Button>
        </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor, eum quae laboriosam dolorem saepe temporibus accusamus sequi recusandae labore alias maxime nisi doloribus ut quos mollitia, perspiciatis facere. Dicta.
            </Modal>
      </div>
)}