import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemCard.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemSchema } from '../model/types/ItemSchema';

interface ItemCardProps {
   className?: string;
   itemInfo?: ItemSchema;
};

const ItemCard = ({className, itemInfo}: ItemCardProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.ItemCard, {}, [className])}>
        <div className={cls.photoItem}></div>
        <div className={cls.descriptionWrapper} ></div>
      </div>
    )
};

export default ItemCard;

