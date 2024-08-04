import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, getItem } from 'entities/Item';
import { Loader } from 'shared/ui/Loader/Loader';
import { ImageBlock, ImageSizeSchema } from 'shared/ui/ImageBlock';
import { DeleteItemBtn, DeleteItemModal } from 'features/ItemFeatures/DeleteItem';
import { EditItemBtn } from 'features/ItemFeatures/EditItem';
import { ToggleFavorite } from 'widgets/ToggleFavorite';
import { UserAvatar } from 'shared/ui/UserAvatar/UserAvatar';
import { BackBtn } from 'shared/ui/BackBtn/BackBtn';

interface ItemPageProps {
   className?: string;
};

export const ItemPage = ({className}: ItemPageProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { itemId } = useParams<{ itemId: string }>();
  const {item, isLoading, error, } = useSelector((state: RootState) => state.item);
  const { authData } = useSelector((state: RootState) => state.user);
  const { isDeleteModal } = useSelector((state: RootState) => state.deleteItemBtnModal);

  useEffect(() => {
    if (authData) {
      dispatch(getItem({itemId: Number(itemId), userId: authData.id}));
    } else {
      dispatch(getItem({itemId: Number(itemId)}));
    }

    return () => {
      dispatch(clearItem());
    }
  }, [dispatch, authData]);

    return (
      <div className={classNames(cls.ItemPage, {[cls.disabled]: isLoading}, [className])}>
        {isLoading ? 
        <Loader /> 
        :
        <div>
          <BackBtn />
          <div className={cls.wrapperFavoriteAvatar}>
            {item.user ? <UserAvatar user={item.user}/> :  <Loader />}
            <ToggleFavorite item={item} />
          </div>
          <div>itemName: {item.itemName}</div>
          {item.category?.name && (
          <div>category: {item.category?.name}</div>
          )}
          <div>description : {item.description}</div>
          <div>price : {item.price}</div>
          <ImageBlock images={item.photos} maxWidthHeight={ImageSizeSchema.maxWH_L} imageHeight={ImageSizeSchema.IH_L}/>
          {item.onEdit && <DeleteItemBtn itemId={item.id} />}
          {item.onEdit && <EditItemBtn itemId={item.id} />}
          <DeleteItemModal 
                        isOpen={isDeleteModal}
          />
        </div>
        }
        {error && <div>{error}</div>}
      </div>
    )
};

