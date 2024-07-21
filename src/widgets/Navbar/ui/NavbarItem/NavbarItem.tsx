import { memo } from 'react';
import cls from './NavbarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { NavbarItemType } from 'widgets/Navbar/model/items';

interface NavbarItemProps {
    item: NavbarItemType;
    onClick: (item: NavbarItemType) => void;
};

export const NavbarItem = memo(({item, onClick}: NavbarItemProps) => {
    const { t } = useTranslation();

    const handleClick = () => {
        onClick(item);
      };

    return (
        <AppLink to={item.path} className={cls.mainLink} onClick={handleClick}>{t(item.text)}</AppLink>
    )
});

