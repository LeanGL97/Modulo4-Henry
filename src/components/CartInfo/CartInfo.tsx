"use client";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import Button from "../Button/Button";
import Products from "../../../interfaces/products";
import Image from "next/image";
import { buyCartService } from "../../../services/cartServices";
import { AuthContext } from "../../../contexts/authContext";
import { toast } from "react-toastify";

const CartInfo = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const { user, setOrders, orders } = useContext(AuthContext);

  const handleOrder = async (cart: Products[]) => {
    const res = await buyCartService(cart, user?.user.id || 0, user?.token || "");

    if (res.status === "approved") {
      setOrders([
        ...orders,
        {
          id: res.id,
          date: res.date,
          products: res.products,
          status: res.status,
        },
      ]);
      toast("Approved!", { type: "success" });
      emptyCart();
    } else {
      toast("Error", { type: "error" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <ul className="text-center items-center">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <li
                className="flex flex-col sm:flex-row py-6 gap-4 sm:gap-10 items-center justify-center border-b
                 border-gray-300"
                key={item.id}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-lg text-blue-950">${item.price}</p>
                </div>
              </li>
            ))}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button
                className="w-full sm:w-72 bg-blue-950 text-white rounded-lg hover:bg-white hover:text-blue-950 hover:border hover:border-blue-950"
                onClick={emptyCart}
              >
                Empty Cart
              </Button>
              <Button
                className="w-full sm:w-72 bg-blue-950 text-white rounded-lg hover:bg-blue-400 hover:border"
                onClick={() => handleOrder(cart)}
              >
                Buy Order
              </Button>
            </div>
          </>
        ) : (
          <p className="text-center mb-5">Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default CartInfo;
