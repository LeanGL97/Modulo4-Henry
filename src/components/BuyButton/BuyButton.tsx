"use client";
import { useContext } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../../contexts/authContext";
import Products from "../../../interfaces/products";
import { CartContext } from "../../../contexts/cartContext";
import { toast } from "react-toastify";

interface Props {
    product: Products;
}

const BuyButton = ({ product }: Props) => {
    const { user } = useContext(AuthContext);
    const { setCart, cart } = useContext(CartContext);

    const handleBuy = (product: Products) => {
        setCart([...cart, product]);
        toast("Added to cart!", { type: "success" });
    };

    const isOnCart = cart ? cart.some((item) => item.id === product.id) : false;

    return (
        <div className="flex flex-col items-center space-y-2">
            <Button
                onClick={() => handleBuy(product)}
                disabled={!user?.login || isOnCart}
                className="w-full sm:w-60 bg-blue-950 text-white rounded-lg p-1 hover:bg-blue-500 cursor-pointer"
            >
                Add to cart
            </Button>
            {!user?.login && <p className="text-red-600 text-xs text-center">You must be logged in</p>}
        </div>
    );
};

export default BuyButton;
