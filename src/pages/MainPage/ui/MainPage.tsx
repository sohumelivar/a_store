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
        photo: ['https://iatkv.tmgrup.com.tr/eb155a/375/375/844/0/1920/1074?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2023%2F09%2F11%2Fiphone-15-ne-zaman-cikacak-iphone-15-fiyati-ve-ozellikleri-iste-turkiye-fiyati-1694440213004.jpg', 
        'https://primetel.com.cy/image/original/2/iphone-14-pro-primetel-1.jpg',
        'https://ict.xabar.uz/static/crop/1/0/736_736_95_1076882936.jpg'],
        itemName: `Example Item ${i}`,
        description: `Description for item ${i}`,
        price: Math.floor(Math.random() * 100),
        category: i % 2 === 0 ? "Electronics" : "Books",
        onEdit: i % 2 === 0,
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