import React, { memo } from 'react';
import cls from './ItemList.module.scss';
import { Item } from 'entities/Item';
import { ImageBlock, ImageSizeSchema } from '../ImageBlock';
import { Loader } from '../Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { getItemsErrors } from 'entities/Items/model/types/items';

interface ItemListProps {
    items: Item[];
    isLoading: boolean;
    error: getItemsErrors | null;
    className?: string;
}

export const ItemList = memo(({ items, isLoading, error, className }: ItemListProps) => {
    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <p>Error: {error.toString()}</p>;
    }

    if (items.length === 0) {
        return <p>No items available.</p>;
    }

    return (
        <div className={classNames(cls.itemList)}>
            {items.map((item) => (
                <div key={item.id} className={classNames(cls.item)}>
                    <h3>{item.itemName}</h3>
                    <h3>{item.category}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.price}</h3>
                    <ImageBlock images={item.photos} maxWidthHeight={ImageSizeSchema.maxWH_S} imageHeight={ImageSizeSchema.IH_S}/>
                </div>
            ))}
        </div>
    );
});
