import React, { useState, useEffect } from 'react';
import { MessageSquare, Database, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, WHY_US } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemBento from './components/ProblemBento';
import SolutionCards from './components/SolutionCards';
import ShowcaseSection from './components/ShowcaseSection';
import PricingBento from './components/PricingBento';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#18181b] text-[#fdfefb]' : 'bg-gray-100 text-gray-900'}`}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <ProblemBento />
            <SolutionCards />
            <ShowcaseSection />
            <PricingBento />

            {/* Why Us Section - Inline Refactored */}
            <section className="py-32 relative bg-[#18181b] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 tech-card p-10 flex flex-col justify-end min-h-[300px] group">
                            <div className="absolute top-0 right-0 p-10 group-hover:rotate-12 transition-transform">
                                <Database className="w-20 h-20 text-emerald-500 opacity-20" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter font-mono">Scalable <br />Infrastructure</h3>
                            <p className="text-gray-400">Architecture ready to handle millions of requests without degradation.</p>
                        </div>
                        {WHY_US.slice(0, 2).map((item, i) => (
                            <div key={i} className="tech-card p-10 text-center flex flex-col items-center justify-center hover:border-emerald-500/50 transition-colors">
                                <div className="mb-6 opacity-80">{item.icon}</div>
                                <h4 className="font-bold uppercase mb-2 text-white font-mono text-xs tracking-widest">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                        ))}
                        <div className="md:col-span-4 tech-card p-10 flex items-center justify-between bg-emerald-900/10">
                            <div className="flex items-center space-x-6">
                                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white uppercase font-mono">Global Deployment</h4>
                                    <p className="text-gray-500 text-sm">Join hundreds of transformed businesses.</p>
                                </div>
                            </div>
                            <div className="hidden md:flex -space-x-4 opacity-50">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#18181b] bg-gray-700 flex items-center justify-center text-[8px] font-mono text-white">USER</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
            <Footer />

            {/* Floating WhatsApp - Sharper */}
            <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="fixed bottom-10 right-10 z-[100] bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 border border-emerald-400/50"
            >
                <MessageSquare size={24} />
            </a>
        </div>
    );
};

export default App;
