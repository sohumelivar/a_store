import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemsWrapper.module.scss';
import { ItemsSchema } from 'entities/Items';
import ItemCard from '../ItemCard/ItemCard';


interface ItemsWrapperProps {
   className?: string;
   items?: ItemsSchema;
};

export const ItemsWrapper = ({className, items}: ItemsWrapperProps) => {

    return (
      <div className={classNames(cls.ItemsWrapper, {}, [className])}>
        {items && items.map((item) => <ItemCard key={item.id} itemInfo={item}/>)}
      </div>
    )
};

