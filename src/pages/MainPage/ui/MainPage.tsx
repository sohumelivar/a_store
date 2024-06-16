import {classNames} from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo, useEffect } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setPage } from 'entities/Items';
import { ItemList } from 'shared/ui/ItemList/ItemList';

interface MainPageProps {
   className?: string;
};

const MainPage = memo(({className}: MainPageProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { items, currentPage, totalPages, isLoading, error } = useSelector((state: RootState) => state.items);

    useEffect(() => {
      dispatch(getItems(currentPage));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
      if (currentPage < totalPages) {
          dispatch(setPage(currentPage + 1));
      }
    };

    const handlePreviousPage = () => {
      if (currentPage > 1) {
          dispatch(setPage(currentPage - 1));
      }
    };

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
          <ItemList items={items} isLoading={isLoading} error={error} />
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    )
});

export default MainPage;