import Logo from '../assets/Logo.png';

function Navigation() {
    return (
        <nav className='navigation flex justify-center fixed top-0'>
            <ul>
                <li>
                    <a href="#">Menus</a>
                </li>
                <li>
                    <a href="#">Orders</a>
                </li>
                <li>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </li>
                <li>
                    <a href="#">Testimoni</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;