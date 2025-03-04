"use client";

import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import Products from "../interfaces/products";


interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextProps {
    cart: Products[];
    setCart: Dispatch<SetStateAction<Products[]>>;
    emptyCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => { },
    emptyCart: () => { }
});

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Products[]>([]);

    useEffect(() => {
        if (cart?.length > 1) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(localCart);
    }, []);

    const emptyCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    }
    return (
        <CartContext.Provider value={{ cart, setCart, emptyCart }}>
            {children}
        </CartContext.Provider>);
};