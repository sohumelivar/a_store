import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemDescription.module.scss';
import { useTranslation } from 'react-i18next';
import { ItemSchema } from 'widgets/ItemCard/model/types/ItemSchema';

interface ItemDescriptionProps {
   className?: string;
   itemInfo?: ItemSchema;
};

export const ItemDescription = ({className, itemInfo}: ItemDescriptionProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.descriptionWrapper, {}, [className])} >
            <div className={cls.s} >{itemInfo.itemName}</div>
            <div className={cls.s} >{itemInfo.price}</div>
            <div className={cls.d} >{'Сегодня 18:01'}</div>
            <div className={cls.d} >{'Jack'}</div>
      </div>
    )
};

