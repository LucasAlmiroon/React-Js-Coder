import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import '../styles/Card-Product.css'

export default function ItemListContent({ greetings }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const peticion = async () => {
            try {
                const respuesta = await fetch("https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Mochila%20Primicia");
                const datos = await respuesta.json();
                console.log(datos.results);

                const newProductos = datos.results.map(element => element);
                setProductos(newProductos);
                console.log(productos)
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };

        peticion();
    }, []);
    return (
        <>
            <h1>{greetings}</h1>

            <div className="lista-pro">
                {productos.map((producto, index) => (
                    <CardProduct
                        key={index}
                        producto={{
                            marca: producto.attributes[0].value_name.max,
                            modelo: producto.attributes[1].value_name
                        }}
                        url={producto.pictures[0].url}
                    />
                ))}
            </div>

        </>
    );
}