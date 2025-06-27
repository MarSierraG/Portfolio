import React from 'react';
import swapfyLogo from '../assets/swapfy-presentacion.png';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface PortfolioProps {
    text: {
        portfolio_heading: string;
        portfolio_intro: string;
        portfolio_project_card: {
            title: string;
            description: string;
            stack: string;
            visit: string;
            code: string;
        };
    };
}

const Portfolio: React.FC<PortfolioProps> = ({ text }) => {
    return (
        <section className="text-black px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-20 sm:mt-28 mb-[100px]">
            {/* Título animado */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-4 tracking-tight"
            >
                {text.portfolio_heading}
            </motion.h2>

            {/* Intro animada */}
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-cyan-300 mb-10 sm:mb-12 text-base sm:text-lg px-2"
            >
                {text.portfolio_intro}
            </motion.p>

            {/* Tarjeta del proyecto */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center bg-black px-2 sm:px-4 mb-[120px]"
            >
                <div className="bg-[#0f1f2d] border border-cyan-300 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300 flex flex-col w-full max-w-3xl">

                    <div className="w-full h-[200px] sm:h-[280px] md:h-[320px] bg-[#0f1f2d] rounded-xl overflow-hidden mb-6">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={swapfyLogo}
                            alt="Swapfy"
                            className="object-contain w-full h-full p-4 sm:p-8 rounded-xl
                            filter drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]
                            hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
                            transition-all duration-500"
                        />
                    </div>

                    <h3 className="text-cyan-300 text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 tracking-wide text-center">
                        Plataforma de Trueque Digital
                    </h3>

                    <p className="text-white text-sm sm:text-base font-semibold mb-4 text-center">
                        MARÍA DEL MAR SIERRA GUTIÉRREZ
                    </p>

                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 text-center sm:text-left">
                        {text.portfolio_project_card.description}
                    </p>

                    <p className="text-sm sm:text-base text-cyan-400 font-semibold text-center sm:text-left">
                        {text.portfolio_project_card.stack}
                    </p>

                    <div className="flex justify-center sm:justify-end gap-6 mt-6 text-cyan-400 text-2xl">
                        <a
                            href="https://swapfy-frontend.vercel.app"
                            title={text.portfolio_project_card.visit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-200 transition-colors"
                        >
                            <FiExternalLink />
                        </a>
                        <a
                            href="https://github.com/MarSierraG/Swapfy"
                            title={text.portfolio_project_card.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-200 transition-colors"
                        >
                            <FiGithub />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
