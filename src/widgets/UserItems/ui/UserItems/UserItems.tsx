import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserItems.module.scss';
import { memo, useEffect } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getUserItems } from 'widgets/UserItems/model/services/getUserItems';
import { Loader } from 'shared/ui/Loader/Loader';
import { ItemList } from 'shared/ui/ItemList/ItemList';
import { clearUserItems, setPage } from 'widgets/UserItems/model/slice/userItemsSlice';
import { Pagination } from 'shared/ui/Pagination/Pagination';

interface UserItemsProps {
    className?: string;
};

export const UserItems = memo(({ className }: UserItemsProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { authData } = useSelector((state: RootState) => state.user);
    const { items, currentPage, totalPages, isLoading, error } = useSelector((state: RootState) => state.userItems);

    useEffect(() => {
        if (authData) {
            dispatch(getUserItems({ page: currentPage, userId: Number(authData.id) }));
        }

        return () => {
            dispatch(clearUserItems());
        }
    }, [dispatch, authData, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setPage(page));
        }
      };

    return (
        <div className={classNames(cls.UserItems, {}, [className])}>
            {isLoading ? 
            <Loader /> 
            :
            <ItemList items={items} error={error} />
          }
            {items.length > 0 && (
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            )}
        </div>
    )
});

