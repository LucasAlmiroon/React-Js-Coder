
import NavBar from './NavBar';
import Busqueda from './Busqueda'

export default function Header() {
    return (
        <header>
            <img src="img/logo.png" alt='Logo del local'>
            </img>
            <Busqueda />
            <NavBar />
        </header>
    );
}
