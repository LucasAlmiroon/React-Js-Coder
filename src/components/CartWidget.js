import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';

export default function CartWidget() {
    const { carrito, setCarrito } = useContext(cartContext)

    return (
        <NavLink to="checkout">
            <li className='btn-navBar' id='carrito'>
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{carrito.length}</p>
            </li>
        </NavLink>
    )

}