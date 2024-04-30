import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemsWrapper } from 'widgets/ItemCard';
import { DropdownElement } from 'shared/ui/DropdownElement';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider';
import { memo } from 'react';

interface MainPageProps {
   className?: string;
};

const MainPage = memo(({className}: MainPageProps) => {
    const { t } = useTranslation();
    const { items, isLoading, error } = useSelector((state: RootState) => state.items);

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
        <ItemsWrapper items={items} />
      </div>
    )
});

export default MainPage;