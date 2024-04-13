import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemCard.module.scss';
import { ItemSchema } from 'widgets/ItemCard/model/types/ItemSchema';
import { ImageBlock } from 'shared/ui/ImageBlock/ImageBlock';
import { ItemDescription } from '../ItemDescription/ItemDescription';

interface ItemCardProps {
   className?: string;
   itemInfo?: ItemSchema;
};

const ItemCard = ({className, itemInfo}: ItemCardProps) => {

    return (
      <div className={classNames(cls.ItemCard, {}, [className])}>
        <ImageBlock images={itemInfo.photo} />
        < ItemDescription itemInfo={itemInfo} />
      </div>
    )
};

export default ItemCard;

