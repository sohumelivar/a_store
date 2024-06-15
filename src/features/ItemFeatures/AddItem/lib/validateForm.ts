interface ValidateSchema {
    itemName: string;
    category?: string;
    description?: string;
    price?: number;
}

export const validateForm = (addItemForm: ValidateSchema) => {
    const errors: string[] = [];
    if (!addItemForm.itemName) errors.push('Itemname is required');
    if (!addItemForm.category) errors.push('Category is required');
    if (!addItemForm.description) errors.push('Description is required');
    if (!addItemForm.price) errors.push('Price is required');
    return errors;
};