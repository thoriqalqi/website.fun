import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-16 border-t dark:border-emerald-500/10 border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                                <Cpu className="text-white w-5 h-5" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter dark:text-white uppercase leading-none">website<span className="text-emerald-500">.fun</span></span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">Building the next generation of web experience for modern businesses.</p>
                    </div>

                    <div className="flex space-x-12 dark:text-gray-400 text-gray-500 font-black text-xs uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-emerald-500 transition-colors">Dribbble</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Designed by website.fun</p>
                        <p className="dark:text-gray-600 text-gray-400 text-[10px]">&copy; 2025 ALL RIGHTS RESERVED. VERSION 2.1.0-SAGE</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
