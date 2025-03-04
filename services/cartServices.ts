import { headers } from "next/headers";
import { Products } from "../interfaces/products";

const apiURL = process.env.NEXT_PUBLIC_API_URL;


export const buyCartService = async (cart: Products[], userId: number, token: string) => {
    const cartAdapted = (cart: Products[]) => {
        return cart.map((item) => item.id);
    };
    
    const response = await fetch(apiURL + "/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({ userId, products: cartAdapted(cart) }),
    }).then((res) => res.json());
    return await response;
};