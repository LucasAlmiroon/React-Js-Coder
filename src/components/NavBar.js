import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li className='btn-navBar'>
                    <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                            Productos
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                                    Mochila
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <NavLink to="mochila/primicia">
                                            Primicia
                                        </NavLink>
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        <NavLink to="mochila/samsonite">
                                            Samsonite
                                        </NavLink>
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        <NavLink to="mochila/gremond">
                                            Gremond
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                                    Valijas
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <NavLink to="valija/primicia">
                                            Primicia
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink to="valija/samsonite">
                                            Samsonite
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink to="valija/delsey">
                                            Delsey
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-NavBar'>
                                    Bolsos de viaje
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <NavLink to="bolso-de-viaje/primicia">
                                            Primicia
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink to="bolso-de-viaje/everlast">
                                            Everlast
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink to="bolso-de-viaje/gremond">
                                            Gremond
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className='btn-navBar'>
                    <NavLink to="/"> About </NavLink>
                </li>
                <li className="registro">
                    <NavLink to="/"> Home </NavLink>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}