import {classNames} from 'shared/lib/classNames/classNames';
import cls from './FavoriteBtn.module.scss';
import { FC, memo, useCallback, useState } from 'react';

interface FavoriteBtn {
   state?: boolean;
};

export const FavoriteBtn: FC<FavoriteBtn> = memo((props) => {
    const {
        state,
    } = props;

    const [isActive, setIsActive] = useState(state);

    const toggleFavorite = useCallback(() => {
        setIsActive(current => !current);
    }, []);

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
