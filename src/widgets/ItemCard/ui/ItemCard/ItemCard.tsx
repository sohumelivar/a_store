import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemCard.module.scss';
import { ItemSchema } from 'entities/Items/model/types/ItemSchema';
import { ImageBlock } from 'shared/ui/ImageBlock/ImageBlock';
import { ItemDescription } from '../ItemDescription/ItemDescription';
import { getItemWithId } from 'entities/Items';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';

interface ItemCardProps {
   className?: string;
   itemInfo?: ItemSchema;
};

const ItemCard = memo(({className, itemInfo}: ItemCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const getItemHandle = useCallback(async () => {
    try {
      await dispatch(getItemWithId(itemInfo.id));
      localStorage.setItem('item', JSON.stringify(itemInfo))
      navigate(`/itemPage/${itemInfo.id}`)
    } catch (error) {
      console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ getItemHandle ☢ error:', error)
    }
  }, [dispatch, itemInfo]);

  return (
    <div onClick={getItemHandle} className={classNames(cls.ItemCard, {}, [className])}>
      <ImageBlock images={itemInfo.photo} />
      <ItemDescription itemInfo={itemInfo} />
    </div>
  )
});

export default ItemCard;

