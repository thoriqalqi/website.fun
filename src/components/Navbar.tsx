import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center relative">

                    {/* LEFT: Logo */}
                    <div className="flex items-center space-x-3 flex-shrink-0 group cursor-pointer">
                        <div className="w-10 h-10 bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center transition-transform">
                            <Cpu className="text-emerald-500 w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none">website<span className="text-emerald-500">.fun</span></span>
                            <span className="text-[10px] font-mono text-emerald-500/60 tracking-widest uppercase">Digital Studio</span>
                        </div>
                    </div>

                    {/* CENTER: Navigation */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <a key={link.label} href={link.href} className="text-gray-400 hover:text-emerald-500 hover:bg-white/5 px-4 py-2 transition-all font-mono text-xs uppercase tracking-widest border border-transparent hover:border-white/5">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 bg-white/5 text-gray-400 border border-white/5 hover:border-emerald-500/30 transition-all"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 font-mono text-xs tracking-widest border border-emerald-500/50 hover:-translate-y-1 transition-transform"
                        >
                            MULAI PROYEK
                        </a>
                    </div>

                    <div className="flex items-center space-x-4 md:hidden">
                        <button onClick={toggleTheme} className="text-emerald-500">
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass absolute w-full mt-2 py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-4 border-b border-white/5">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href} className="block font-mono text-lg text-gray-200" onClick={() => setIsOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <a href={WHATSAPP_LINK} className="block bg-emerald-600 text-center text-white py-4 font-bold rounded-none">
                        KONSULTASI SEKARANG
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
