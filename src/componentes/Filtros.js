export default function Filtros() {
    return (
        <div className="centrado">
            <h2>
                Filtros
            </h2>

            <select class="form-select" aria-label="Default select example">
                <option selected>Tipo</option>
                <option value="1">Mochila</option>
                <option value="2">Valija</option>
                <option value="3">Accesorio</option>
            </select>

            <select class="form-select" aria-label="Default select example">
                <option selected>Marca</option>
                <option value="1">Primicia</option>
                <option value="2">Jansport</option>
                <option value="3">Gremond</option>
            </select>

            <label for="customRange3" class="form-label">Precio</label>
            <input type="range" class="form-range" min="0" max="50000" step="1000" id="customRange3" />
        </div>

    )
}