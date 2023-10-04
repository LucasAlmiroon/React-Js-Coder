import ItemList from './ItemList';
import Filtros from './Filtros';

export default function Products() {
    return (
        <>
            <ItemList greetings={'Bienvenido'} />
            <Filtros />
        </>
    )
}