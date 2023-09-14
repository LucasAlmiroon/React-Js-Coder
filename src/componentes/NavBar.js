import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li className='btn-navBar'>
                    <a href="index.html">Home
                    </a>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                            Productos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Mochilas</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Valijas</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Accesorios</Dropdown.Item>
                        </Dropdown.Menu>
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