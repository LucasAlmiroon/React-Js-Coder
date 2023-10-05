import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li className='btn-navBar'>
                    <Link to="/">
                                Home
                            </Link>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                            Productos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link to="/mochilas">
                                Mochilas
                            </Link>
                            <Link to="/valijas">
                                Valija
                            </Link>
                            <Link to="/accesorios">
                                Accesorios
                            </Link></Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className='btn-navBar'>
                    <a href="index.html">About
                    </a>
                </li>
                <li className="registro">
                    <a href="index.html">Registrarse
                    </a>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}