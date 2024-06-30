import { memo, useCallback, useEffect } from "react";
import cls from './EditItemBtn.module.scss';
import { Button } from "shared/ui/Buton/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { AppDispatch, RootState } from "app/providers/StoreProvider";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface EditBtnProps {
   className?: string;
   itemId?: number;
};

export const EditItemBtn = memo(({className, itemId}: EditBtnProps) => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { authData } = useSelector((state: RootState) => state.user);

    const handleEditItem = useCallback(() => {
        navigate(`/editItem/${itemId}/${authData.id}`);
    }, [navigate, itemId, authData?.id]);

    return (
        <Button 
            className={classNames(cls.EditeItemBtn, {}, [className])}
            type="button"
            onClick={handleEditItem}
        >
            Изменить
        </Button>
    )
});
