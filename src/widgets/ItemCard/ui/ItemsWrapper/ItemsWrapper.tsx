import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemsWrapper.module.scss';
import { ReactNode } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { ItemSchema } from 'widgets/ItemCard';

interface ItemsWrapperProps {
   className?: string;
   items?: Array<ItemSchema>
};

export const ItemsWrapper = ({className, items}: ItemsWrapperProps) => {

    return (
      <div className={classNames(cls.ItemsWrapper, {}, [className])}>
        {items && items.map((item) => <ItemCard key={item.id} itemInfo={item}/>)}
      </div>
    )
};

