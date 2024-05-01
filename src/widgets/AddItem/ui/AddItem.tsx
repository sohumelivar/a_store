import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddItem.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from 'shared/ui/Buton/Button';
import { useRegistrationForm } from '../hooks/useAddItemForm';
import { AddItemAPI } from '../api/addItemApi';

interface AddItemPageProps {
    className?: string;
};

const AddItemPage = memo(({ className }: AddItemPageProps) => {
    const { t } = useTranslation();
    const { formState, handleInputChange } = useRegistrationForm();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AddItemAPI(formState);
        console.log('разместить объявление --- >>> ');
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.AddItemPage, {}, [className])}>
            <div className={cls.inputsWrapper}>
                <input onChange={handleInputChange} name="itemName" value={formState.itemName} type="text" placeholder="Введите название товара"/>
                <input onChange={handleInputChange} name="category" value={formState.category} type="text" placeholder="Введите категорию"/>
                <input onChange={handleInputChange} name="description" value={formState.description} type="text" placeholder="Введите описание товара"/>
                <input onChange={handleInputChange} name="price" value={formState.price || ''} type="number" placeholder="Введите цену товара"/>
                <input onChange={handleInputChange} name="photo" type="file" placeholder="Добавьте фото товара"/>
            </div>
            <Button type="submit">Разместить объявление</Button>
        </form>
    )
});

export default AddItemPage;