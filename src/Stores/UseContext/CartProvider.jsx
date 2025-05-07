import React, { createContext, useContext, useState } from "react";

export const Cart = createContext();

export const CartContext = ({ children }) => {
    
    const [cartitems, setCartitems] = useState([]);

    const addtocart = (item) => {
        setCartitems([...cartitems, item]);
    };

    const removecart = (item) => {
        setCartitems(cartitems.filter((apple) => apple !== item));
    };

    return (
        <Cart.Provider value={{ cartitems, addtocart, removecart }}>
            {children}
        </Cart.Provider>
    );
};

export const usecart = () => {
    return useContext(Cart);
};
