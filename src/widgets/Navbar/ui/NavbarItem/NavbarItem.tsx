import { memo } from 'react';
import cls from './NavbarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { NavbarItemType } from 'widgets/Navbar/model/items';

interface NavbarItemProps {
    item: NavbarItemType
};

export const NavbarItem = memo(({item}: NavbarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink to={item.path} className={cls.mainLink}>{t(item.text)}</AppLink>
    )
});

