import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from "./pages/Portfolio";

const texts = {
    es: {
        greeting: 'Hola Mundo, Soy',
        name: 'María Del Mar Sierra Gutiérrez',
        role: 'Desarrolladora',
        developer: 'Web',
        welcome: 'Bienvenido a mi web personal',
        button: 'English',
        about: 'Sobre mí',
        portfolio: 'Portafolio',
        blog: 'Blog',
        about_heading: 'Sobre mí',
        about_intro: "¡Hola! Soy María del Mar, desarrolladora web con formación en Desarrollo de Aplicaciones Web (DAW) y Administración de Sistemas Informáticos en Red (ASIR). Desde que descubrí el mundo de la programación, supe que quería dedicarme a esto.",
        about_goal: "Me apasiona crear soluciones accesibles, visualmente cuidadas y con una experiencia de usuario sólida. Siempre estoy con ganas de aprender más, mejorar mis habilidades y enfrentar nuevos retos.",
        portfolio_heading: 'Swapfy: mi proyecto final de DAW',
        portfolio_intro: 'Explora el proyecto en el que he trabajado como proyecto integrado del ciclo DAW',

        portfolio_project_card: {
            title: 'Swapfy',
            description: 'Plataforma de trueque digital donde puedes subir artículos, ofrecer o pedir intercambios, gestionar tu perfil, chatear con otros usuarios y (solo si eres administrador) acceder a un panel de administración.',
            stack: 'Angular · Spring Boot · PostgreSQL',
            visit: 'Ver proyecto',
            code: 'Ver código'
        },

        skills: {
            languages: 'Lenguajes de programación',
            frameworks: 'Frameworks',
            databases: 'Bases de datos',
            versionControl: 'Control de versiones',
            tools: 'Herramientas',
            networking: "Redes y Certificaciones",
            items: {
                html: 'HTML',
                css: 'CSS',
                js: 'JavaScript',
                php: 'PHP',
                java: 'Java',
                bootstrap: 'Bootstrap',
                angular: 'Angular',
                springboot: 'Spring Boot',
                mysql: 'MySQL',
                postgresql: 'PostgreSQL',
                oracle: 'Oracle',
                git: 'Git',
                github: 'GitHub',
                bitbucket: 'Bitbucket (Básico)',
                azure: 'Azure Repos (Básico)',
                xampp: 'XAMPP',
                jira: 'Jira (Básico)',
                cisco: "Cisco",
                ccna1: "CCNA1: Introducción a las Redes",
                ccna2: "CCNA2: Conmutación, Enrutamiento e Inalámbrico",
                systems: "Sistemas Operativos",
                debian: "Debian",
                windows: "Windows Server",

            }
        }

    },
    en: {
        greeting: "Hello World, I'm",
        name: 'María Del Mar Sierra Gutiérrez',
        role: 'Web',
        developer: 'Developer',
        welcome: 'Welcome to my personal website',
        button: 'Español',
        about: 'About me',
        portfolio: 'Portfolio',
        blog: 'Blog',
        about_heading: 'About me',
        about_intro: "Hi! I'm María del Mar, a web developer with a background in Web Application Development (DAW) and Network Systems Administration (ASIR). Ever since I discovered the world of programming, I knew I wanted to dedicate myself to it.",
        about_goal: "I'm passionate about creating accessible, visually polished solutions with a solid user experience. I'm always eager to learn more, improve my skills, and take on new challenges.",
        portfolio_heading: 'Swapfy: my final DAW project',
        portfolio_intro: 'Explore the project I worked on as the final integrated project of my Web App Development course',

        portfolio_project_card: {
            title: 'Swapfy',
            description: 'Digital bartering platform where users can upload items, offer or request trades, manage their profile, chat with others, and administrators can access a full admin panel.',
            stack: 'Angular · Spring Boot · PostgreSQL',
            visit: 'Visit project',
            code: 'View code'
        },

        skills: {
            languages: 'Programming Languages',
            frameworks: 'Frameworks',
            databases: 'Databases',
            versionControl: 'Version Control',
            tools: 'Tools',
            networking: "Networking & Certifications",
            items: {
                html: 'HTML',
                css: 'CSS',
                js: 'JavaScript',
                php: 'PHP',
                java: 'Java',
                bootstrap: 'Bootstrap',
                angular: 'Angular',
                springboot: 'Spring Boot',
                mysql: 'MySQL',
                postgresql: 'PostgreSQL',
                oracle: 'Oracle',
                git: 'Git',
                github: 'GitHub',
                bitbucket: 'Bitbucket (Basic)',
                azure: 'Azure Repos (Basic)',
                xampp: 'XAMPP',
                jira: 'Jira (Basic)',
                cisco: "Cisco",
                ccna1: "CCNA1: Introduction to Networks",
                ccna2: "CCNA2: Switching, Routing and Wireless Essentials",
                systems: "Operating Systems",
                debian: "Debian",
                windows: "Windows Server",

            }
        }

    }
}


function App() {
    const [language, setLanguage] = useState<'es' | 'en'>('es');
    const t = texts[language];

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <div className="bg-black text-white">
        <Router>
            <Navbar
                items={['Home', t.about, t.portfolio]}
                currentLang={language}
                onToggleLanguage={toggleLanguage}
                buttonText={language === 'es' ? 'EN' : 'ES'}
            />
            <main>
                <Routes>
                    <Route path="/" element={<Home text={t} />} />
                    <Route path="/about" element={<About text={t} skillsText={t.skills} />} />
                    <Route path="/portfolio" element={<Portfolio text={t} />} />
                </Routes>
            </main>
        </Router>
        </div>
    );
}

export default App;
