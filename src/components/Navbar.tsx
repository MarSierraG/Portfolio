import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import {FaGlobeAmericas} from "react-icons/fa";


interface NavbarProps {
    items: { key: string; label: string; path: string }[];
    currentLang: 'es' | 'en';
    onToggleLanguage: () => void;
    buttonText: string;
}

const Navbar: React.FC<NavbarProps> = ({ items, currentLang, onToggleLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-blue-400 font-mono text-lg font-semibold">
                    Mar();
                </div>

                {/* Botón menu en móvil */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Menú escritorio */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    {items.map((item) => (
                        <li key={item.key}>
                            <Link
                                to={item.path}
                                className="relative text-gray-400 hover:text-white transition"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Idioma y GitHub escritorio */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onToggleLanguage}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded text-xs flex items-center gap-2"
                        title="Cambiar idioma / Change language"
                    >
                        <FaGlobeAmericas />
                        {currentLang === 'es' ? 'English' : 'Español'}
                    </button>
                    <a
                        href="https://github.com/MarSierraG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition text-xl"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <div className="md:hidden bg-black px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        {items.map((item) => (
                            <li key={item.key}>
                                <Link
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={onToggleLanguage}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded text-xs flex items-center gap-2"
                            title="Cambiar idioma / Change language"
                        >
                            <FaGlobeAmericas />
                            {currentLang === 'es' ? 'English' : 'Español'}
                        </button>
                        <a
                            href="https://github.com/MarSierraG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition text-xl"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
