import React, { useState } from "react";
import { cartContext } from './CartContext';

export default function ContextProvider({ children }) {
    const [carrito, setCarrito] = useState([])
    return (
        <cartContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </cartContext.Provider>
    )
}