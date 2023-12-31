import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import '../styles/Card-Product.css'
import { useParams } from 'react-router-dom';

export default function ItemListContent({ greetings }) {
    const [productos, setProductos] = useState([]);
    const { tipo, marca } = useParams()

    useEffect(() => {
        const peticion = async () => {
            try {
                const respuesta = await fetch("https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=" + tipo + ' ' + marca);
                const datos = await respuesta.json();

                const newProductos = datos.results.map(element => element);
                setProductos(newProductos);

            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };

        peticion();
    }, [marca, tipo]);
    return (
        <>
            <h1>{greetings}</h1>

            <div className="lista-pro">
                {productos.map((producto, index) => (
                    <CardProduct
                        key={index}
                        producto={{
                            marca: producto.attributes[0].value_name,
                            modelo: producto.attributes[1].value_name,
                            id: producto.id,
                            url: producto.pictures,
                            precio: 50000
                        }}
                    />
                ))}
            </div>

        </>
    );
}