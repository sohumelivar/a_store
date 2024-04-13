import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemSchema, ItemsWrapper } from 'widgets/ItemCard';
import { DropdownElement } from 'shared/ui/DropdownElement';
import { Text } from 'shared/ui/Text/Text';

interface MainPageProps {
   className?: string;
};

const itemsArray: Array<ItemSchema> = [];

for (let i = 1; i <= 20; i++) {
    itemsArray.push({
        id: i,
        itemName: `Example Item ${i}`,
        description: `Description for item ${i}`,
        price: Math.random() * 100,  // Генерация случайной цены от 0 до 100
        category: i % 2 === 0 ? "Electronics" : "Books",  // Чередование категорий
        onEdit: i % 2 === 0  // Чередование состояния onEdit
    });
}

const MainPage = ({className}: MainPageProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
        <DropdownElement firstChildren={<Text text='first children' />} secondChildren={<Text text='second children' />}/>
        <ItemsWrapper items={itemsArray} />
      </div>
    )
};

export default MainPage;