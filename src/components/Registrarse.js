import "../styles/registro.css"

export default function Registrarse() {
    return (
        <div className="Registro">

            <form className="Registro">
                <label>Nombre</label>
                <input type="text" name="nombre"></input>
                <label>Apellido</label>
                <input type="text" name="apellido"></input>
                <label>Email</label>
                <input type="text" name="email"></input>
                <label>Constraseña</label>
                <input type="password" name="password"></input>
                <button>Finalizar registro</button>
            </form>
        </div>
    )
}