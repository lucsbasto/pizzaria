/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { createContext, ReactNode, useState } from "react";
import { CartItem } from "../types";

type CartContextType = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, addToCart: any, cart: CartItem[] }
export const CartContext = createContext({} as CartContextType);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const addToCart =(item: CartItem) => {
        item.additionalTopping.sort((a, b) => a.name.localeCompare(b.name))
        const newItem = { ...item, amount: 1}
        console.log({cart})
        setCart([...cart, newItem])
    }
  
    return (
        <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;