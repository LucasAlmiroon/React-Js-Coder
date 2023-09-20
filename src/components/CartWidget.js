import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
    return (
        <li className='btn-navBar' id='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>1</p>
        </li>
    )

}