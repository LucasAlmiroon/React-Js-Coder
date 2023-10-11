import Carousel from "./Carousel"

export default function CardProduct({ producto, url }) {
    return (
        <div>
            <Carousel images={url} />
            <p>Mochila {producto.marca} {producto.modelo}</p>
            <p>$50.000</p>
            <p className="descripcion">
                Marca: {producto.marca} </p>
            <p className="descripcion">
                Modelo: {producto.modelo}</p>
            <button type="button" className="btn btn-primary btn-sm" id="addCart">Añadir al carrito</button>
        </div>
    )
}