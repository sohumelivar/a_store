import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SelectCategory.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../model/services/getCategories';
import { setCategory } from '../model/slice/categoriesSlice';

interface SelectCategoryProps {
   className?: string;
}

export const SelectCategory = ({ className }: SelectCategoryProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { categories, isLoadingCategories, errorCategories, category } = useSelector((state: RootState) => state.categories);
    const addItemForm = useSelector((state: RootState) => state.addItem);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const editItemForm = useSelector((state: RootState) => state.editItem);
    
    useEffect(() => {
        if (!categories) {
            dispatch(getCategories());
        }
        if (editItemForm.category.name) {
            dispatch(setCategory(editItemForm.category.name));
            setSelectedCategory(editItemForm.category.name);
        }
    }, [categories, editItemForm.category.name]);
    
    const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        const selectedCategory = categories.find(cat => cat.name === selectedValue);
        dispatch(setCategory(selectedCategory?.name));
    }, [dispatch, addItemForm.error]);

    return (
        <div className={classNames(cls.SelectCategory, {}, [className])}>
            {!isLoadingCategories && !errorCategories && (
                <select value={selectedCategory || '' || editItemForm?.category?.name} onChange={handleCategoryChange}>
                    <option value="" disabled>Выберите категорию</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
            )}
        </div>
    );
};

