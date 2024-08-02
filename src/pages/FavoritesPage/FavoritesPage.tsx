import {classNames} from 'shared/lib/classNames/classNames';
import cls from './FavoritesPage.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { getFavorites, setPage } from 'entities/Favorites';
import { Loader } from 'shared/ui/Loader/Loader';
import { ItemList } from 'shared/ui/ItemList/ItemList';
import { Pagination } from 'shared/ui/Pagination/Pagination';
import { BackBtn } from 'shared/ui/BackBtn/BackBtn';

interface FavoritesPageProps {
   className?: string;
};

export const FavoritesPage = ({className}: FavoritesPageProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { favorites, currentPage, totalPages, isLoadingFavorites, error } = useSelector((state: RootState) => state.favorites);
    const { isLoading } = useSelector((state: RootState) => state.toggleFavorite);

    useEffect(() => {
            dispatch(getFavorites(currentPage));
    }, [dispatch, currentPage, isLoading]);

    useEffect(() => {
        if (!isLoading && favorites.length === 0 && currentPage > 1) {
            console.log("🚀 ~ useEffect ~ currentPage:", currentPage)
            dispatch(setPage(currentPage - 1));
        }
    }, [favorites, isLoading, currentPage, dispatch]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setPage(page));
        }
    };

    return (
      <div className={classNames(cls.FavoritesPage, {}, [cls[className]])}>
        <h1>FAVORITES</h1>
            <BackBtn />
            {isLoadingFavorites ? 
            <Loader /> 
            :
            <ItemList items={favorites}/>
             }
            {favorites?.length > 0 && (
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={handlePageChange} 
                    />
            )}
      </div>
    )
};

