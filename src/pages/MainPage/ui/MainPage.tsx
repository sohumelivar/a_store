import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemCard } from 'widgets/ItemCard';

interface MainPageProps {
   className?: string;
};

const MainPage = ({className}: MainPageProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
            <ItemCard itemInfo={{itemName: 'sas', price: 200}}/>
      </div>
    )
};

export default MainPage;