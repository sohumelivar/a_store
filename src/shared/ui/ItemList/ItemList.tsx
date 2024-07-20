import { memo } from 'react';
import cls from './ItemList.module.scss';
import { Item } from 'entities/Item';
import { ImageBlock, ImageSizeSchema } from '../ImageBlock';
import { classNames } from 'shared/lib/classNames/classNames';
import { getItemsErrors } from 'entities/Items/model/types/items';
import { ToggleFavorite } from 'widgets/ToggleFavorite';
import { useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider';
import { DeleteItemBtn, DeleteItemModal } from 'features/ItemFeatures/DeleteItem';
import { EditItemBtn } from 'features/ItemFeatures/EditItem';

interface ItemListProps {
    items: Item[];
    error?: getItemsErrors | null;
    className?: string;
}

export const ItemList = memo(({ items, error, className }: ItemListProps) => {

    const { isLoading } = useSelector((state: RootState) => state.toggleFavorite);
    const { isDeleteModal } = useSelector((state: RootState) => state.deleteItemBtnModal);

    if (error) {
        return <p>Error: {error.toString()}</p>;
    }

    if (items.length === 0) {
        return <p>No items available.</p>;
    }

    return (
        <div className={classNames(cls.itemList)}>
            {items.map((item) => (
                <div key={item.id} className={classNames(cls.item, {[cls.disabled]: isLoading}, [className])}>
                    <ToggleFavorite item={item} />
                    <h3>{item.itemName}</h3>
                    <h3>{item.category}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.price}</h3>
                    <ImageBlock images={item.photos} maxWidthHeight={ImageSizeSchema.maxWH_S} imageHeight={ImageSizeSchema.IH_S}/>
                    {item.onEdit && <DeleteItemBtn itemId={item.id} />}
                    {item.onEdit && <EditItemBtn itemId={item.id} />}
                    <DeleteItemModal 
                        isOpen={isDeleteModal}
                    />
                </div>
            ))}
        </div>
    );
});
