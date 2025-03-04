"use client"
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Order, UserSession } from "../interfaces/users";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    user: UserSession | null;
    setUser: Dispatch<SetStateAction<UserSession | null>>;
    logOut: () => void;
    orders: Order[];
    setOrders: Dispatch<SetStateAction<Order[]>>;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => { },
    logOut: () => { },
    setOrders: () => { },
    orders: [],
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserSession | null>(null);
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
        setOrders(user?.user.orders || []);
    }, [user]);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user")!);
        setUser(localUser);
    }, []);

    const logOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logOut, orders, setOrders }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;