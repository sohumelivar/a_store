import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
   className?: string;
};

export const Navbar = ({className}: NavbarProps) => {

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/all'} className={cls.mainLink}>Поиск</AppLink>
            <AppLink to={'/favorites'} className={cls.mainLink}>Избранное</AppLink>
            <AppLink to={'/add'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Объявления +</AppLink>
            <AppLink to={'/messages'} className={cls.mainLink}>Сообщения</AppLink>
            <AppLink to={'/profile'} className={cls.mainLink}>Профиль</AppLink>
        </div>
      </div>
    )
};

