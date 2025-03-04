interface Products {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image: string;
    categoryId: number;
}

export default Products;

export interface Category {
    name: string;
    categoryId: string
}