import logo from '../images/Logo.png'
import Nav from './Nav';

function Header() {
    return (
        <header>
            <img src={logo} alt='little-lemon-logo' />
            <Nav />
        </header>
    );
}

export default Header;