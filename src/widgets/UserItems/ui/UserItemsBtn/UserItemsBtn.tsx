import { memo, useCallback } from "react";
import cls from './UserItemsBtn.module.scss';
import { Button } from "shared/ui/Buton/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { RootState } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface UserItemsBtnProps {
   className?: string;
};

export const UserItemsBtn = memo(({className}: UserItemsBtnProps) => {
    const navigate = useNavigate();
    const { authData } = useSelector((state: RootState) => state.user);

    const handleUserItems = useCallback(() => {
        if(authData) {
            navigate(`/items/userItems/${authData.id}`);
        }
    }, [navigate, authData?.id]);

    return (
        <Button 
            className={classNames(cls.UserItemsBtn, {}, [className])}
            type="button"
            onClick={handleUserItems}
        >
            Мои объявления
        </Button>
    )
});
