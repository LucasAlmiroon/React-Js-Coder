import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <Logo />
            <NavBar />
            <Busqueda />
        </header>
    );
}

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home
                    </a>
                </li>
                <li>
                    <a href="index.html">Productos
                    </a>
                </li>
                <li>
                    <a href="index.html">About
                    </a>
                </li>
                <li className="registro">
                    <a href="index.html">Registrarse
                    </a>
                </li>
            </ul>
        </nav>
    );
}

function Logo() {
    return (
        <img src="img/logo.png">
        </img>
    );
}

function Busqueda() {
    return (
        <div className='busqueda'>
            <input type="search" placeholder="Busqueda">
            </input>
            <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}