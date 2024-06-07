import {classNames} from 'shared/lib/classNames/classNames';
import cls from './FavoriteBtn.module.scss';
import { FC, memo, useCallback, useState } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStateFavorite } from 'entities/Items';
import { setIsAuthModal } from 'features/AuthByUsername';

interface FavoriteBtn {
    itemId?: number;
    isFavorite?: boolean;
};

export const FavoriteBtn: FC<FavoriteBtn> = memo((props) => {
    const {
        itemId, 
        isFavorite = false,
    } = props;
    const dispatch: AppDispatch = useDispatch();
    const { authData } = useSelector((state: RootState) => state.user);

    const [isActive, setIsActive] = useState(isFavorite);
    
    const toggleFavorite = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        // dispatch(initAuthData());
        if (authData) {
            dispatch(toggleStateFavorite({userId: Number(authData.id), itemId}))
            return setIsActive(current => !current);
        }
        dispatch(setIsAuthModal(true));
    }, [dispatch, itemId, authData]);

    return (
        <div 
            className={classNames(cls.FavoriteBtn, {[cls.active]: isActive}, [])}
        >
             <span onClick={toggleFavorite}>
                {isActive ? '❤️' : '🤍'}
            </span>
        </div>
    )
});
