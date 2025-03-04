import Products, {  } from "./products";

export interface UserSession {
    login: boolean;
    user: User;
    token: string;
};

export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credential: Credential;
    orders: Order[];
}

interface Credential {
    id: number;
    password: string;
}

export interface Order {
    date: string;
    id: number;
    products: Products[];
    status: string;
}