import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddItemPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import {
    setItemName,
    setCategory,
    setDescription,
    setPrice,
    setError,
} from '../model/slice/AddItemSlice';
import { useCallback, useRef, useState } from 'react';
import { addItem } from '../model/services/addItem';
import { MAX_FILE_SIZE } from 'shared/const/otherVariables';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'shared/ui/Buton/Button';
import { validateForm } from '../lib/validateForm';

interface AddItemPageProps {
    className?: string;
}

export const AddItemPage = ({ className }: AddItemPageProps) => {
    const addItemForm = useSelector((state: RootState) => state.addItem);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [photos, setPhotos] = useState<File[]>([]);
    const photoInputRefs = useRef<HTMLInputElement[]>([]);
    const [photoInputs, setPhotoInputs] = useState<string[]>([uuidv4()]);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

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
        dispatch(setError(null));
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
                dispatch(setError('File size exceeds 2MB'));
                if (photoInputRefs.current[index]) {
                    photoInputRefs.current[index].value = '';
                }
                return;
            }
            const newPhotos = [...photos];
            newPhotos[index] = event.target.files[0];
            setPhotos(newPhotos);
        }
    }, [photos, dispatch]);

    const addPhotoInput = useCallback(() => {
        if (photoInputs.length < 5) {
            setPhotoInputs([...photoInputs, uuidv4()]);
        }
    }, [photoInputs]);

    const removePhoto = useCallback((index: number) => {
        const newPhotos = photos.filter((_, idx) => idx !== index);
        setPhotos(newPhotos);
        setPhotoInputs(photoInputs.filter((_, idx) => idx !== index));
    }, [photos, photoInputs]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateForm(addItemForm.item)
        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            const formData = new FormData();
            if (photos) {
                photos.forEach((photo, index) => {
                    formData.append(`photo${index}`, photo);
                });
            }
            if (addItemForm.item.itemName) formData.append('itemName', addItemForm.item.itemName);
            if (addItemForm.item.category) formData.append('category', addItemForm.item.category);
            if (addItemForm.item.description) formData.append('description', addItemForm.item.description);
            if (addItemForm.item.price) formData.append('price', addItemForm.item.price.toString());
            const resultAction = await dispatch(addItem(formData));
            if (addItem.fulfilled.match(resultAction)) {
                navigate('/');
            }
        }
    }, [navigate, dispatch, photos, addItemForm.item]);

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.AddItemPage, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={onChangeItemName} name="itemName" value={addItemForm.item.itemName} type="text" placeholder="Введите название товара" required/>
                <input onChange={onChangeCategory} name="category" value={addItemForm.item.category} type="text" placeholder="Введите категорию" required/>
                <input onChange={onChangeDescription} name="description" value={addItemForm.item.description} type="text" placeholder="Введите описание товара" required/>
                <input onChange={onChangePrice} name="price" value={addItemForm.item.price || ''} type="number" placeholder="Введите цену товара" required/>
                {photoInputs.map((inputIndex, idx) => (
                    <div key={inputIndex} className={cls.fileInputWrapper}>
                        <input
                            type="file"
                            onChange={(event) => handlePhotoChange(idx, event)}
                            ref={el => photoInputRefs.current[idx] = el as HTMLInputElement}
                        />
                        <button type="button" onClick={() => removePhoto(idx)}>Удалить фото</button>
                    </div>
                ))}
                {photoInputs.length < 5 && (
                    <button type="button" className={cls.addPhotoButton} onClick={addPhotoInput}>Добавить фото</button>
                )}
            </div>
            {addItemForm.error && <div className={cls.error}>{addItemForm.error}</div>}
            {errorMessages.length > 0 && (
                    <div className={cls.errorMessages}>
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
            <Button type="submit" className={cls.submitButton}>Разместить объявление</Button>
        </form>
    );
};
