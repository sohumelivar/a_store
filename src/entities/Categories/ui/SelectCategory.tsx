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
    const { category: editCategory } = useSelector((state: RootState) => state.editItem);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    useEffect(() => {
        if (!categories || categories.length === 0) {
            dispatch(getCategories());
        }
    }, [dispatch, categories]);

    useEffect(() => {
        if (editCategory && editCategory.name) {
            setSelectedCategory(editCategory.name);
        }
    }, [editCategory]);

    const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        const selectedCategory = categories.find(cat => cat.name === selectedValue);
        if (selectedCategory) {
            dispatch(setCategory(selectedCategory.name));
        }
    }, [dispatch, categories]);

    return (
        <div className={classNames(cls.SelectCategory, {}, [className])}>
            {!isLoadingCategories && !errorCategories && (
                <select value={selectedCategory || ''} onChange={handleCategoryChange}>
                    <option value="" disabled>Выберите категорию</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
            )}
        </div>
    );
};
