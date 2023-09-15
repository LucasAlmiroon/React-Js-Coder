export default function CardProduct({ producto, url }) {
    return (
        <div>
            <img src={url}></img>
            <p>Mochila {producto.marca} {producto.modelo}</p>
            <p>$50.000</p>
            <p className="descripcion">
                Marca: {producto.marca} </p>
            <p className="descripcion">
                Modelo: {producto.modelo}</p>
            <button type="button" class="btn btn-primary btn-sm" id="addCart">Añadir al carrito</button>

        </div>
    )
}