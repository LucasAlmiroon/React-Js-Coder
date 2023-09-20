export default function Filtros() {
    return (
        <form className="centrado">
            <h2>
                Filtros
            </h2>

            <select className="form-select" aria-label="Default select example">
                <option>Tipo</option>
                <option value="1">Mochila</option>
                <option value="2">Valija</option>
                <option value="3">Accesorio</option>
            </select>

            <select className="form-select" aria-label="Default select example">
                <option>Marca</option>
                <option value="1">Primicia</option>
                <option value="2">Jansport</option>
                <option value="3">Gremond</option>
            </select>

            <label htmlFor="customRange3" className="form-label">Precio</label>
            <input type="range" className="form-range" min="0" max="50000" step="1000" id="customRange3" />
        </form>

    )
}