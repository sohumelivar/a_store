interface ValidateSchema {
    itemName: string;
    description?: string;
    price?: number;
}

export const validateForm = (addItemForm: ValidateSchema) => {
    const errors: string[] = [];
    if (!addItemForm.itemName) errors.push('Itemname is required');
    if (!addItemForm.description) errors.push('Description is required');
    if (!addItemForm.price) errors.push('Price is required');
    return errors;
};