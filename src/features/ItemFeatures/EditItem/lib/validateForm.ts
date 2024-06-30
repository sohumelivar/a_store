interface ValidateSchema {
    itemName: string;
    category?: string;
    description?: string;
    price?: number;
}

export const validateForm = (editItemForm: ValidateSchema) => {
    const errors: string[] = [];
    if (!editItemForm.itemName) errors.push('Itemname is required');
    if (!editItemForm.category) errors.push('Category is required');
    if (!editItemForm.description) errors.push('Description is required');
    if (!editItemForm.price) errors.push('Price is required');
    return errors;
};