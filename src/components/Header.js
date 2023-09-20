
import NavBar from './NavBar';
import Search from './Search'

export default function Header() {
    return (
        <header>
            <img src="img/logo.png" alt='Logo del local'>
            </img>
            <Search />
            <NavBar />
        </header>
    );
}
