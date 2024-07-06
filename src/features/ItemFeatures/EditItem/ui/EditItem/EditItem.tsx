import React, { useEffect, useCallback, useRef, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { setItemName, setCategory, setDescription, setPrice, setPhotos, clearForm } from '../../model/slice/editItemSlice';
import { Button } from 'shared/ui/Buton/Button';
import { MAX_FILE_SIZE } from 'shared/const/otherVariables';
import { v4 as uuidv4 } from 'uuid';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditItem.module.scss';
import { getItem } from 'entities/Item';
import { ImageBlock, ImageSizeSchema } from 'shared/ui/ImageBlock';
import { updateItem } from '../../model/services/updateItem';
import { validateForm } from '../../lib/validateForm';

interface EditItemProps {
    className?: string;
}

export const EditItem = memo(({ className }: EditItemProps) => {
    const editItemForm = useSelector((state: RootState) => state.editItem);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [photos, setPhotosState] = useState<File[]>([]);
    const [existingPhotos, setExistingPhotos] = useState<string[]>([]);
    const [deletedPhotos, setDeletedPhotos] = useState<string[]>([]);
    const photoInputRefs = useRef<HTMLInputElement[]>([]);
    const [photoInputs, setPhotoInputs] = useState<string[]>([uuidv4()]);
    const { itemId, userId } = useParams<{ itemId: string, userId: string }>();
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getItem({ itemId: Number(itemId), userId: Number(userId) }));
        return () => {
            dispatch(clearForm());
        };
    }, [dispatch]);

    useEffect(() => {
        if (editItemForm.photos.length > 0) {
            setExistingPhotos(editItemForm.photos);
            setPhotoInputs([uuidv4()]);
        }
    }, [editItemForm.photos]);

    const onChangeItemName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setItemName(event.target.value));
    }, [dispatch]);

    const onChangeCategory = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCategory(event.target.value));
    }, [dispatch]);

    const onChangeDescription = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDescription(event.target.value));
    }, [dispatch]);

    const onChangePrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPrice(Number(event.target.value)));
    }, [dispatch]);

    const handlePhotoChange = useCallback((index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
                console.error('File size exceeds 2MB');
                if (photoInputRefs.current[index]) {
                    photoInputRefs.current[index].value = '';
                }
                return;
            }
            const newPhotos = [...photos];
            newPhotos[index] = event.target.files[0];
            setPhotosState(newPhotos);
        }
    }, [photos]);

    const addPhotoInput = useCallback(() => {
        if ((existingPhotos.length + photoInputs.length) < 5) {
            setPhotoInputs([...photoInputs, uuidv4()]);
        }
    }, [existingPhotos, photoInputs]);

    const removePhoto = useCallback((index: number) => {
        const newPhotos = photos.filter((_, idx) => idx !== index);
        setPhotosState(newPhotos);
        setPhotoInputs(photoInputs.filter((_, idx) => idx !== index));
    }, [photos, photoInputs]);

    const removeExistingPhoto = useCallback((photo: string) => {
        setDeletedPhotos([...deletedPhotos, photo]);
        setExistingPhotos(existingPhotos.filter((p) => p !== photo));
    }, [existingPhotos, deletedPhotos]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateForm(editItemForm);
        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            const formData = new FormData();
            if (photos) {
                photos.forEach((photo) => {
                    formData.append('photo', photo);
                });
            }
            if (editItemForm.itemName) formData.append('itemName', editItemForm.itemName);
            if (editItemForm.category) formData.append('category', editItemForm.category);
            if (editItemForm.description) formData.append('description', editItemForm.description);
            if (editItemForm.price) formData.append('price', editItemForm.price.toString());
            formData.append('deletedPhotos', JSON.stringify(deletedPhotos));
            const resultAction = await dispatch(updateItem({formData, itemId, userId}));
            if (updateItem.rejected.match(resultAction)) {
                setDeletedPhotos([]);
                setExistingPhotos(editItemForm.photos);
            } 
            if (updateItem.fulfilled.match(resultAction)) {
                navigate('/');
            }
        }
    }, [photos, editItemForm, deletedPhotos, dispatch, navigate]);

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.EditItem, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={onChangeItemName} name="itemName" value={editItemForm.itemName} type="text" placeholder="Введите название товара"  />
                <input onChange={onChangeCategory} name="category" value={editItemForm.category} type="text" placeholder="Введите категорию" required />
                <input onChange={onChangeDescription} name="description" value={editItemForm.description} type="text" placeholder="Введите описание товара" required />
                <input onChange={onChangePrice} name="price" value={editItemForm.price || ''} type="number" placeholder="Введите цену товара" required />
                <div className={cls.existingPhotos}>
                    {existingPhotos.map((photo, idx) => (
                        <div key={idx} className={cls.photoWrapper}>
                            <ImageBlock images={[photo]} maxWidthHeight={ImageSizeSchema.maxWH_S} imageHeight={ImageSizeSchema.IH_S}/>
                            <Button type="button" onClick={() => removeExistingPhoto(photo)}>Удалить фото</Button>
                        </div>
                    ))}
                </div>
                {photoInputs.slice(0, Math.max(1, 5 - existingPhotos.length)).map((inputIndex, idx) => (
                    <div key={inputIndex} className={cls.fileInputWrapper}>
                        <input
                            disabled={editItemForm.isLoading}
                            type="file"
                            onChange={(event) => handlePhotoChange(idx, event)}
                            ref={el => photoInputRefs.current[idx] = el as HTMLInputElement}
                        />
                        <Button type="button" disabled={editItemForm.isLoading} onClick={() => removePhoto(idx)}>Удалить фото</Button>
                    </div>
                ))}
                {(existingPhotos.length + photoInputs.length) < 5 && (
                    <Button type="button" disabled={editItemForm.isLoading} className={cls.addPhotoButton} onClick={addPhotoInput}>Добавить фото</Button>
                )}
            </div>
            {editItemForm.error && <div className={cls.error}>{editItemForm.error}</div>}
            {editItemForm.errorMessage && <div className={cls.error}>{editItemForm.errorMessage}</div>}
            {errorMessages.length > 0 && (
                    <div className={cls.error}>
                        {errorMessages.map((error, index) => (
                                <div 
                                    key={index}
                                    className={cls.error}
                                >
                                    {error}
                                </div>
                        ))}
                    </div>
            )}
            <Button type="submit" disabled={editItemForm.isLoading} className={cls.submitButton}>Обновить товар</Button>
        </form>
    );
});
