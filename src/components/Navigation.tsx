import Logo from '../assets/Logo.png';

function Navigation() {
    return (
        <nav className='navigation w-full flex fixed top-0'>
            <ul className='flex w-full justify-center gap-10'>
                <li>
                    <a href="#">Menus</a>
                </li>
                <li>
                    <a href="#">Orders</a>
                </li>
                <li>
                    <a href="#">
                        <img src={Logo} alt="Logo" width='20%'/>
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