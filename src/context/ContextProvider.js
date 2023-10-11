import React, { useState } from "react";
import { CartContext } from './CartContext';

export default function ContextProvider({ children }) {
    const [carrito, setCarrito] = useState([])
    return (
        <CartContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CartContext.Provider>
    )
}