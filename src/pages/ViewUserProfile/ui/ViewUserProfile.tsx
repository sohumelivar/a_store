import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ViewUserProfile.module.scss';
import { useParams } from 'react-router-dom';
import { BackBtn } from 'shared/ui/BackBtn/BackBtn';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPage } from 'entities/Items';
import { Loader } from 'shared/ui/Loader/Loader';
import { ItemList } from 'shared/ui/ItemList/ItemList';
import { Pagination } from 'shared/ui/Pagination/Pagination';
import { clearUserItems, getUserItems } from 'widgets/UserItems';
import { getProfile } from 'entities/Profile';

interface ViewUserProfileProps {
   className?: string;
};

export const ViewUserProfile = ({className}: ViewUserProfileProps) => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { user, isLoading, error, errorMessage } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
      dispatch(getProfile(Number(userId)));
    return () => {
      
    }
  }, [dispatch]);

    return (
      <div className={classNames(cls.ViewUserProfile, {}, [cls[className]])}>
        <BackBtn />
        <div>{'View User Profile'}</div>
        <div>{`Username: ${user.username}`}</div>
        <div>{`Firstname: ${user.firstname}`}</div>
        <div>{`Lastname: ${user.lastname}`}</div>
        <div>{`Age: ${user.age}`}</div>
        {user.avatar && <img className={classNames(cls.img)} src={`http://localhost:5001/uploads/${(user.avatar).toString()}`} alt="Avatar" />}
        {/* <div>
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
        </div> */}
      </div>
    )
};

