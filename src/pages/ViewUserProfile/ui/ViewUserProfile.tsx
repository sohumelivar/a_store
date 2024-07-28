import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ViewUserProfile.module.scss';
import { useParams } from 'react-router-dom';
import { BackBtn } from 'shared/ui/BackBtn/BackBtn';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { ItemList } from 'shared/ui/ItemList/ItemList';
import { Pagination } from 'shared/ui/Pagination/Pagination';
import { getViewUserProfile } from 'entities/ViewUserProfile';
import { getViewUserItems, setClearViewUserPage, setPage } from 'entities/ViewUserItems';

interface ViewUserProfileProps {
   className?: string;
};

export const ViewUserProfile = ({className}: ViewUserProfileProps) => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { viewUserProfile, isLoading, error, errorMessage } = useSelector((state: RootState) => state.viewUserProfile);
  const { viewUserItems, isLoadingItems, currentPage, totalPages } = useSelector((state: RootState) => state.viewUserItems);

  useEffect(() => {
      dispatch(getViewUserProfile(Number(userId)));
      dispatch(getViewUserItems({page: currentPage, viewUserId: Number(userId)}));
    return () => {
      
    }
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
        dispatch(setPage(page));
    }
  };

    return (
      <div className={classNames(cls.ViewUserProfile, {}, [cls[className]])}>
        <BackBtn />
        <div>{'View User Profile'}</div>
        <div>{`Username: ${viewUserProfile.username}`}</div>
        <div>{`Firstname: ${viewUserProfile.firstname}`}</div>
        <div>{`Lastname: ${viewUserProfile.lastname}`}</div>
        <div>{`Age: ${viewUserProfile.age}`}</div>
        {viewUserProfile.avatar && <img className={classNames(cls.img)} src={`http://localhost:5001/uploads/${(viewUserProfile.avatar).toString()}`} alt="Avatar" />}
        <div>
          {isLoadingItems ? 
              <Loader /> 
              :
              <ItemList items={viewUserItems}/>
            }
          {viewUserItems?.length > 0 && (
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
          )}
        </div>
      </div>
    )
};

