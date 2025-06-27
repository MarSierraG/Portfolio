import avatar from '../assets/avatar.png';
import { FaNetworkWired } from 'react-icons/fa';
import { FaLinux, FaWindows } from 'react-icons/fa';
import { motion } from 'framer-motion';



import {
    FaHtml5,
    FaCss3Alt,
    FaPhp,
    FaJs,
    FaJava,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import {
    SiAngular,
    SiSpringboot,
    SiMysql,
    SiPostgresql,
    SiOracle,
    SiBitbucket,
    SiXampp,
    SiJira,
} from 'react-icons/si';
import React from 'react';

interface AboutProps {
    text: {
        about_heading: string;
        about_intro: string;
        about_goal: string;
    };
    skillsText: {
        languages: string;
        frameworks: string;
        databases: string;
        versionControl: string;
        tools: string;
        networking: string;
        items: {
            html: string;
            css: string;
            js: string;
            php: string;
            java: string;
            bootstrap: string;
            angular: string;
            springboot: string;
            mysql: string;
            postgresql: string;
            oracle: string;
            git: string;
            github: string;
            bitbucket: string;
            azure: string;
            xampp: string;
            jira: string;
            cisco: string;
            ccna1: string;
            ccna2: string;
            systems: string,
            debian: string,
            windows: string,
        };
    };
}

const About: React.FC<AboutProps> = ({ text, skillsText }) => {
    const groupedSkills = [
        {
            title: skillsText.languages,
            items: [
                { icon: <FaHtml5 className="text-orange-500" />, name: skillsText.items.html },
                { icon: <FaCss3Alt className="text-blue-500" />, name: skillsText.items.css },
                { icon: <FaJs className="text-yellow-400" />, name: skillsText.items.js },
                { icon: <FaPhp className="text-indigo-400" />, name: skillsText.items.php },
                { icon: <FaJava className="text-[#007396]" />, name: skillsText.items.java },
            ],
        },
        {
            title: skillsText.frameworks,
            items: [
                { icon: <SiAngular className="text-red-500" />, name: skillsText.items.angular },
                { icon: <SiSpringboot className="text-green-600" />, name: skillsText.items.springboot },
            ],
        },
        {
            title: skillsText.databases,
            items: [
                { icon: <SiMysql className="text-[#00758f]" />, name: skillsText.items.mysql },
                { icon: <SiPostgresql className="text-blue-600" />, name: skillsText.items.postgresql },
                { icon: <SiOracle className="text-red-700" />, name: skillsText.items.oracle },
            ],
        },
        {
            title: skillsText.versionControl,
            items: [
                { icon: <FaGitAlt className="text-orange-600" />, name: skillsText.items.git },
                { icon: <FaGithub className="text-white" />, name: skillsText.items.github },
                { icon: <SiBitbucket className="text-blue-500" />, name: skillsText.items.bitbucket },
            ],
        },
        {
            title: skillsText.tools,
            items: [
                { icon: <SiXampp className="text-orange-500" />, name: skillsText.items.xampp },
                { icon: <SiJira className="text-blue-600" />, name: skillsText.items.jira },
            ],
        },  {
            title: skillsText.networking,
            items: [
                { icon: <FaNetworkWired className="text-green-500" />, name: skillsText.items.cisco  },
                { icon: <FaNetworkWired className="text-blue-500" />, name: skillsText.items.ccna1 },
                { icon: <FaNetworkWired className="text-indigo-500" />, name: skillsText.items.ccna2 },
            ],
        },
        {
            title: skillsText.items.systems,
            items: [
                { icon: <FaLinux className="text-yellow-400" />, name: skillsText.items.debian },
                { icon: <FaWindows className="text-blue-400" />, name: skillsText.items.windows },
            ],
        },
    ];

    return (
        <section className="text-white px-4 max-w-6xl mx-auto mt-[100px] mb-[110px] py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-[110px] py-16">
                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-60 h-60 rounded-full bg-blue-500 p-[5px] mx-auto md:mx-0"
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


                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center md:text-left md:flex-1"
                >
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">{text.about_heading}</h2>
                    <p className="mb-4 text-lg">{text.about_intro}</p>
                    <p className="mb-8 text-lg">{text.about_goal}</p>
                </motion.div>

            </div>

            {groupedSkills.map((group, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <h4 className="text-xl text-blue-400 font-bold mb-4">{group.title}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {group.items.map((tech, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: j * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center border border-blue-600 p-4 rounded-lg bg-[#0d1117] hover:bg-[#161b22] transition"
                            >
                                <div className="text-3xl mb-2">{tech.icon}</div>
                                <span className="text-sm text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}

        </section>
    );
};

export default About;
