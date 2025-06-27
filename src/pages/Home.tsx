import avatar from '../assets/avatar.png';
import { FaRegHandPaper } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

interface HomeProps {
    text: {
        greeting: string;
        name: string;
        role: string;
        developer: string;
        welcome: string;
    };
}

export default function Home({ text }: HomeProps) {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-0">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

                {/* Textos */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-4"
                >
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-400"
                    >
                        {text.greeting}
                    </motion.p>

                    {/* Typewriter */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(300)
                                    .typeString(text.name)
                                    .start();
                            }}
                        />
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl md:text-3xl"
                    >
                        {text.role}{' '}
                        <span className="text-blue-300 font-semibold">{text.developer}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-400 flex items-center gap-2"
                    >
                        {text.welcome}
                        <FaRegHandPaper className="text-blue-400 text-lg animate-wiggle inline-block" />
                    </motion.p>
                </motion.div>

                {/* Avatar animado */}
                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative w-80 h-80 rounded-full bg-blue-500 p-[5px]"
                >
                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl shadow-blue-400">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 animate-pulse pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
}
