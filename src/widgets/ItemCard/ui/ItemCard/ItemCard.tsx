import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemCard.module.scss';
import { ItemSchema } from 'entities/Items/model/types/ItemSchema';
import { ImageBlock } from 'shared/ui/ImageBlock/ImageBlock';
import { ItemDescription } from '../ItemDescription/ItemDescription';
import { getItemWithId } from 'entities/Items';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';

interface ItemCardProps {
   className?: string;
   itemInfo?: ItemSchema;
};

const ItemCard = ({className, itemInfo}: ItemCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const getItemHandle = () => {
    dispatch(getItemWithId(itemInfo.id));
  }

  return (
    <div onClick={getItemHandle} className={classNames(cls.ItemCard, {}, [className])}>
      <ImageBlock images={itemInfo.photo} />
      <ItemDescription itemInfo={itemInfo} />
    </div>
  )
};

export default ItemCard;

