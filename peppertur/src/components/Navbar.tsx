import React, { useState } from "react";
import Logo from "/logo.png";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
    handleNavClick: (event: React.MouseEvent<HTMLAnchorElement>, section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ handleNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-lg fixed w-full top-0 left-0 z-30">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 mr-4"/>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold" onClick={(e) => handleNavClick(e, 'home')}>
                        Home
                    </a>
                    <a href="#services" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold" onClick={(e) => handleNavClick(e, 'services')}>
                        Serviços
                    </a>
                    <a href="#whoare" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold" onClick={(e) => handleNavClick(e, 'whoare')}>
                        Quem Somos?
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-semibold" onClick={(e) => handleNavClick(e, 'contact')}>
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
                <div className="md:hidden mt-4 space-y-2 z-50">
                    <a href="#home" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold" onClick={(e) => handleNavClick(e, 'home')}>
                        Home
                    </a>
                    <a href="#services" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold" onClick={(e) => handleNavClick(e, 'services')}>
                        Serviços
                    </a>
                    <a href="#whoare" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold" onClick={(e) => handleNavClick(e, 'whoare')}>
                        Quem Somos?
                    </a>
                    <a href="#contact" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold" onClick={(e) => handleNavClick(e, 'contact')}>
                        Contato
                    </a>
                </div>
            )}
        </nav>
    );
};
