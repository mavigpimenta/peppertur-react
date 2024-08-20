import { useState } from "react";
import Logo from "/logo.png";
import { FaBars } from "react-icons/fa"; 

export const Navbar = ({ handleNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-lg z-10 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 mr-4"/>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold x" onClick={(e) => handleNavClick(e, 'home')}>
                        Home
                    </a>
                    <a href="#services" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold x" onClick={(e) => handleNavClick(e, 'services')}>
                        Serviços
                    </a>
                    <a href="#whoare" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold x" onClick={(e) => handleNavClick(e, 'whoare')}>
                        Quem Somos?
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold x" onClick={(e) => handleNavClick(e, 'contact')}>
                        Contato
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <a href="#home" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold x" onClick={ (e) => handleNavClick(e, 'home')}>
                        Home
                    </a>
                    <a href="#services" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold x" onClick={(e) => handleNavClick(e, 'services')}>
                        Serviços
                    </a>
                    <a href="#whoare" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold x" onClick={(e) => handleNavClick(e, 'whoare')}>
                        Quem Somos?
                    </a>
                    <a href="#contact" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold x" onClick={(e) => handleNavClick(e, 'contact')}>
                        Contato
                    </a>
                </div>
            )}
        </nav>
    );
};
