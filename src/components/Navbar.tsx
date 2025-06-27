import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    items: string[];
    currentLang: 'es' | 'en';
    onToggleLanguage: () => void;
    buttonText: string;
}

const Navbar: React.FC<NavbarProps> = ({ items, currentLang, onToggleLanguage, buttonText }) => {
    // Diccionario para mapear los nombres visibles a las rutas reales
    const sectionRoutes: { [key: string]: string } = {
        Home: '/',
        Inicio: '/',
        'About me': '/about',
        'Sobre mí': '/about',
        Portfolio: '/portfolio',
        Portafolio: '/portfolio',
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-blue-400 font-mono text-lg font-semibold">
                    Mar();
                </div>

                {/* Menú */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={sectionRoutes[item] || '/'}
                                className="relative text-gray-400 hover:text-white transition"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Idioma y GitHub */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onToggleLanguage}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded text-xs"
                    >
                        {buttonText} ({currentLang})
                    </button>
                    <a
                        href="https://github.com/TU_USUARIO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
