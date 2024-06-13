import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddItemPage.module.scss';
import { Button } from 'shared/ui/Buton/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import {
    setItemName,
    setCategory,
    setDescription,
    setPrice,
    setUserId,
} from '../model/slice/AddItemSlice';
import { useCallback, useState } from 'react';
import { addItem } from '../model/services/addItem';

interface AddItemPageProps {
   className?: string;
};

export const AddItemPage = ({ className }: AddItemPageProps) => {
    const addItemForm = useSelector((state: RootState) => state.addItem);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [photos, setPhotos] = useState<File[]>([]);
    console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ AddItemPage ☢ photos:', photos)

    const [photoInputs, setPhotoInputs] = useState<number[]>([0]);
    console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ AddItemPage ☢ photoInputs:', photoInputs)


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

    const handlePhotoChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const newPhotos = [...photos];
            newPhotos[index] = event.target.files[0];
            setPhotos(newPhotos);
        }
    };

    const addPhotoInput = () => {
        if (photoInputs.length < 5) {
            setPhotoInputs([...photoInputs, photoInputs.length]);
        }
    };

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userId = JSON.parse(localStorage.getItem('user')).id
        const formData = new FormData();
        if (photos) {
            photos.forEach((photo, index) => {
                formData.append(`photo${index}`, photo);
            });
        }
        formData.append('userId', userId.toString());
        if (addItemForm.item.itemName) formData.append('itemName', addItemForm.item.itemName);
        if (addItemForm.item.category) formData.append('category', addItemForm.item.category);
        if (addItemForm.item.description) formData.append('description', addItemForm.item.description);
        if (addItemForm.item.price) formData.append('price', addItemForm.item.price.toString());
        const resultAction = await dispatch(addItem(formData));
        if (addItem.fulfilled.match(resultAction)) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.AddItemPage, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={onChangeItemName} name="itemName" value={addItemForm.item.itemName} type="text" placeholder="Введите название товара"/>
                <input onChange={onChangeCategory} name="category" value={addItemForm.item.category} type="text" placeholder="Введите категорию"/>
                <input onChange={onChangeDescription} name="description" value={addItemForm.item.description} type="text" placeholder="Введите описание товара"/>
                <input onChange={onChangePrice} name="price" value={addItemForm.item.price || ''} type="number" placeholder="Введите цену товара"/>
                {photoInputs.map((inputIndex, idx) => (
                <div key={inputIndex}>
                    <input
                        type="file"
                        onChange={(event) => handlePhotoChange(idx, event)}
                    />
                </div>
                ))}
                {photoInputs.length < 5 && (
                    <button type="button" onClick={addPhotoInput}>Добавить фото</button>
                )}
            </div>
            <Button type="submit">Разместить объявление</Button>
        </form>
    );
};
