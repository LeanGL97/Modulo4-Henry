import { Products } from "./products";
import { User } from "./users";

export interface Order {
    status: string;
    date: string;
    user: User;
    products: Products[];
    id: number;
}