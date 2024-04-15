import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemDescription.module.scss';
import { useTranslation } from 'react-i18next';
import { FavoriteBtn } from 'shared/ui/FavoriteBtn/ui/FavoriteBtn';
import { ItemSchema } from 'entities/Items';

interface ItemDescriptionProps {
   className?: string;
   itemInfo?: ItemSchema;
};

export const ItemDescription = ({className, itemInfo}: ItemDescriptionProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.descriptionBlock, {}, [className])} >
        <div className={cls.descriptionWrapper} >
            <div className={cls.itemName} >{itemInfo.itemName}</div>
            <div className={cls.itemPrice} >{itemInfo.price}</div>
            <div className={cls.itemTime} >{'Сегодня 18:01'}</div>
            <div className={cls.itemUserName} >{'Jack'}</div>
        </div>
        <div className={cls.favoritesWrapper} >
          <FavoriteBtn />
        </div>
      </div>
    )
};
