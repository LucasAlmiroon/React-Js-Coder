import Carousel from "./Carousel";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";

export default function CardProduct({ producto, url }) {
    const {carrito, setCarrito} = useContext(cartContext);
    return (
        <div>
            <Carousel images={url} />
            <p>Mochila {producto.marca} {producto.modelo}</p>
            <p>$50.000</p>
            <p className="descripcion">
                Marca: {producto.marca} </p>
            <p className="descripcion">
                Modelo: {producto.modelo}</p>
            <button type="button" className="btn btn-primary btn-sm" id="addCart" value={producto.id} 
            onClick={() =>  setCarrito(prevState => [...prevState, producto])}>
            Añadir al carrito</button>
        </div>
    )
}