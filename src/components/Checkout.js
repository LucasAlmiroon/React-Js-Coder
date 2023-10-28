import "../styles/checkoutForm.css"

import { cartContext } from '../context/CartContext';
import { useContext, useEffect, useState } from "react";
import { doc, getDoc, addDoc, collection, getFirestore } from "firebase/firestore";

export default function Checkout() {
    const { carrito, setCarrito } = useContext(cartContext)
    const db = getFirestore();
    const [nuevaOrden, setOrden] = useState()
    const [ordenCreada, setOrdenCreada] = useState(false);
    const [idCompra, setIdCompra] = useState("");
    let total = 0;

    carrito.forEach(p => {
        total += p.precio;
    });

    const handleChange = (e) => {
        setOrden({ ...nuevaOrden, [e.target.name]: e.target.value })
    }
    const createOrder = (e) => {
        e.preventDefault();

        const ordersCollection = collection(db, "orders");

        const objOrder = {
            comprador: nuevaOrden,
            total: total,
        };

        addDoc(ordersCollection, objOrder)
            .then(({ id }) => {
                setIdCompra(id);
                setOrdenCreada(true);
            })
            .catch((error) => {
                console.error("Error al agregar el documento: ", error);
            });
    }

    return ordenCreada ?
        <p>Su orden fue creada, su id es: {idCompra} </p>
        :
        (
            <div className="chekout">

                <form className="checkoutForm">
                    <label>Nombre</label>
                    <input type="text" name="nombre" onChange={(e) => handleChange(e)}></input>
                    <label>Apellido</label>
                    <input type="text" name="apellido" onChange={(e) => handleChange(e)}></input>
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e) => handleChange(e)}></input>
                    <label>Telefono</label>
                    <input type="text" name="telefono" onChange={(e) => handleChange(e)}></input>
                    <button onClick={(e) => createOrder(e)}>Finalizar compra</button>
                </form>
                <ul>
                    {carrito.map((p, index) => (
                        <li key={index}>
                            <img className="imgCheckout" src={p.url[0].url}></img>
                            <p>{p.marca}</p>
                            <p>{p.modelo}</p>
                            <p>${p.precio}</p>
                        </li>
                    ))}
                    <li>Total: ${total} </li>
                    <button onClick={() => setCarrito([])}>Vaciar carrito</button>
                </ul>
            </div>
        )
}
