import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo, useEffect } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setPage } from 'entities/Items';
import { ItemList } from 'shared/ui/ItemList/ItemList';
import { Pagination } from 'shared/ui/Pagination/Pagination';

interface MainPageProps {
   className?: string;
};

const MainPage = memo(({className}: MainPageProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { items, currentPage, totalPages, isLoading, error } = useSelector((state: RootState) => state.items);

    useEffect(() => {
      dispatch(getItems(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
          dispatch(setPage(page));
      }
  };

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
          <ItemList items={items} error={error} />
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

export default MainPage;