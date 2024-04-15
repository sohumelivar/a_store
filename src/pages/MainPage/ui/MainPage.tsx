import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemsWrapper } from 'widgets/ItemCard';
import { DropdownElement } from 'shared/ui/DropdownElement';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider';

interface MainPageProps {
   className?: string;
};

const MainPage = ({className}: MainPageProps) => {
    const { t } = useTranslation();
    const { items, isLoading, error } = useSelector((state: RootState) => state.items);
  const { item } = useSelector((state: RootState) => state.item);


    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
        <DropdownElement firstChildren={<Text text='first children' />} secondChildren={<Text text={item.category} />}/>
        <ItemsWrapper items={items} />
      </div>
    )
};

export default MainPage;