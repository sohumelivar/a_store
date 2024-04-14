import {classNames} from 'shared/lib/classNames/classNames';
import cls from './TestPage.module.scss';
import { ItemCard } from 'widgets/ItemCard';

interface TestPageProps {
   className?: string;
};

export const TestPage = ({className}: TestPageProps) => {

  const example = {
        id: 1,
        photo: ['https://iatkv.tmgrup.com.tr/eb155a/375/375/844/0/1920/1074?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2023%2F09%2F11%2Fiphone-15-ne-zaman-cikacak-iphone-15-fiyati-ve-ozellikleri-iste-turkiye-fiyati-1694440213004.jpg', 
        'https://primetel.com.cy/image/original/2/iphone-14-pro-primetel-1.jpg',
        'https://ict.xabar.uz/static/crop/1/0/736_736_95_1076882936.jpg'],
        itemName: `Example Item 1`,
        description: `Description for item 1`,
        price: Math.floor(Math.random() * 100),
        category: "Electronics",
        onEdit: false,
  }

    return (
      <div className={classNames(cls.TestPage, {}, [className])}>
          <ItemCard itemInfo={example} />
      </div>
    )
};

