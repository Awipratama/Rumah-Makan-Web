import Logo from "../assets/Logo.png";
import { FaSearch, FaBars } from "react-icons/fa";

function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-around px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-white tracking-wide">
            <img src={Logo} alt="" />
          </div>
        </div>

        {/* Menu */}
        <nav className="md:flex items-center gap-8 text-white font-medium">
          <a
            href="#home"
            className="relative group"
          >
            HOME
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#page" className="hover:text-amber-400 transition">PAGE</a>
          <a href="#menu" className="hover:text-amber-400 transition">MENU</a>
          <a href="#reservation" className="hover:text-amber-400 transition">RESERVATION</a>
          <a href="#blog" className="hover:text-amber-400 transition">BLOG</a>
          <a href="#shop" className="hover:text-amber-400 transition">SHOP</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white text-lg">
          <FaSearch className="cursor-pointer hover:text-amber-400 transition" />
          <FaBars className="cursor-pointer hover:text-amber-400 transition md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
