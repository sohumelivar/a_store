import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemCard.module.scss';
import { ItemSchema } from 'widgets/ItemCard/model/types/ItemSchema';

interface ItemCardProps {
   className?: string;
   itemInfo?: ItemSchema;
};

const ItemCard = ({className, itemInfo}: ItemCardProps) => {

    return (
      <div className={classNames(cls.ItemCard, {}, [className])}>
        <div className={cls.photoItem}>{itemInfo.itemName}</div>
        <div className={cls.descriptionWrapper} >{itemInfo.description}</div>
      </div>
    )
};

export default ItemCard;

