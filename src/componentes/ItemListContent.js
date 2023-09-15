import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';

export default function ItemListContent({ greetings }) {
    const [productos, setProductos] = useState([]);
    const [marca, setMarca] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [imagen, setImagen] = useState([]);

    useEffect(() => {
        const peticion = async () => {
            try {
                const respuesta = await fetch("https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Mochila%20Primicia");
                const datos = await respuesta.json();
                console.log(datos.results);

                const newProductos = datos.results.map(element => element.attributes);
                setProductos(newProductos);
                const newMarca = newProductos.map(e => e[0].value_name);
                const newModelo = newProductos.map(e => e[1].value_name);
                setMarca(newMarca);
                setModelo(newModelo);

                const newImagenes = datos.results.map(e => e.pictures);
                setImagenes(newImagenes)
                const newImagen = newImagenes.map(e => e[0].url)
                setImagen(newImagen)


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
                            marca: producto[0].value_name,
                            modelo: producto[1].value_name,
                        }}
                        url={imagen[index]}
                    />
                ))}
            </div>

        </>
    );
}
