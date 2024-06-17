import { memo, useCallback } from 'react';
import cls from './ToggleFavorite.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { Item } from 'entities/Item';
import { Loader } from 'shared/ui/Loader/Loader';
import { toggleFavorite } from '../model/services/toggleFavorite';
import { classNames } from 'shared/lib/classNames/classNames';
import { setIsAuthModal } from 'features/AuthByUsername';

interface ToggleFavoriteProps {
    item: Item;
    className?: string;
}

export const ToggleFavorite = memo(({ item, className }: ToggleFavoriteProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { authData } = useSelector((state: RootState) => state.user);
    const { isLoading } = useSelector((state: RootState) => state.toggleFavorite);

    const handleToggleFavorite = useCallback(() => {
        if (authData) {
            dispatch(toggleFavorite({ userId: authData.id, itemId: item.id }));
        } else {
            dispatch(setIsAuthModal(true));
        }
    }, [dispatch, authData, item.id]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={classNames(cls.FavoriteBtn, {[cls.active]: item.isFavorite}, [])}>
            <span onClick={handleToggleFavorite}>
                {item.isFavorite ? '❤️' : '🤍'}
            </span>
        </div>
    );
});
