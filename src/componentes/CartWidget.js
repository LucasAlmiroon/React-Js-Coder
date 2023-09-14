import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
    return (
        <li className='btn-navBar'>
            <FontAwesomeIcon icon={faCartShopping} />
            <label>1</label>
        </li>
    )

}