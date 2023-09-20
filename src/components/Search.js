import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Busqueda() {
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