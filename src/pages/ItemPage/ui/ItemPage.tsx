import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { setItem } from 'entities/Items';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { isEmptyObject } from 'shared/lib/isEmptyObject/isEmptyObject';
import { DropdownElement } from 'shared/ui/DropdownElement';
import { Text } from 'shared/ui/Text/Text';
import { ImageBlock, ImageSizeSchema } from 'shared/ui/ImageBlock';

interface ItemPageProps {
   className?: string;
};

export const ItemPage = memo(({className}: ItemPageProps) => {
    const { t } = useTranslation();
    const dispatch: AppDispatch = useDispatch();
    let item = useSelector((state: RootState) => state.item.item);
    console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ ItemPage ☢ item:', item)
    
    useEffect(() => {
        if (isEmptyObject(item)) {
            dispatch(setItem(JSON.parse(localStorage.getItem('item'))));
        }
        return () => {
            console.log('unmount page');
            localStorage.removeItem('item');
        }
    }, []); 

    return (
      <div className={classNames(cls.ItemPageWrapper, {}, [className])}>
            <DropdownElement firstChildren={<Text text='initial'/>} secondChildren={<Text text='drop element'/>} />
            <div className={classNames(cls.itemPage)} >
                <div className={classNames(cls.mainBlock)} >
                    <ImageBlock images={item?.photo} maxWidthHeight={ImageSizeSchema.maxWH_M} imageHeight={ImageSizeSchema.IH_M} />
                    <ImageBlock images={item?.photo} maxWidthHeight={ImageSizeSchema.maxWH_L} imageHeight={ImageSizeSchema.IH_L} />
                    <ImageBlock images={item?.photo} maxWidthHeight={ImageSizeSchema.maxWH_S} imageHeight={ImageSizeSchema.IH_S} />
                    <ImageBlock images={item?.photo} maxWidthHeight={ImageSizeSchema.maxWH_S} imageHeight={ImageSizeSchema.IH_S} />
                </div>
                <div className={classNames(cls.floatingBlock)} > <button>TEST</button></div>
            </div>
      </div>
    )
});

