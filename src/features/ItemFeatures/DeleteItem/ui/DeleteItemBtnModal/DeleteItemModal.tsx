import {classNames} from 'shared/lib/classNames/classNames';
import cls from './DeleteItemModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';

import { Button } from 'shared/ui/Buton/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { setIsDeleteModal, setError } from '../../model/slice/deleteItemModalSlice';
import { deleteItem } from '../../model/services/deleteItem';
import { useNavigate } from 'react-router-dom';

interface DeleteItemModalProps {
   className?: string;
   isOpen: boolean;
   onClose?: () => void;
};

export const DeleteItemModal = ({className, isOpen, onClose}: DeleteItemModalProps) => {
  const { isDeleteModal, error, itemId } = useSelector((state: RootState) => state.deleteItemBtnModal);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseModal = useCallback(() => {
    dispatch(setIsDeleteModal(false));
    if (error) {
      dispatch(setError());
    }
  }, [isDeleteModal, error]);

  const onDeleteItem = useCallback(() => {
    dispatch(deleteItem({itemId, navigate}));
  }, [dispatch, itemId]);

    return (
      <Modal 
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>
            {error ? <div><div>{error}</div><button onClick={onCloseModal}>{'закрыть'}</button></div> : <div><div>{`Вы уверенны???`}</div>
            <Button onClick={onDeleteItem}>Yes</Button>
            <Button onClick={onCloseModal}>No</Button></div>}
        </div>
      </Modal>
    )
};
