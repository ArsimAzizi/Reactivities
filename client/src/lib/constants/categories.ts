/** Categories that have a matching image in /public/images/categoryImages. */
export const categoryOptions = [
    { value: 'drinks', label: 'Drinks' },
    { value: 'culture', label: 'Culture' },
    { value: 'film', label: 'Film' },
    { value: 'food', label: 'Food' },
    { value: 'music', label: 'Music' },
    { value: 'travel', label: 'Travel' },
] as const;

export const PLACEHOLDER_IMAGE = '/images/placeholder.png';

export const getCategoryImage = (category: string) =>
    `/images/categoryImages/${category}.jpg`;
