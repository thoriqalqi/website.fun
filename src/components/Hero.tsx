import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg">
            {/* Background Decor */}
            <div className="orbit-container opacity-50">
                <div className="orbit-circle w-[200px] h-[200px] border-dashed border-white/10"></div>
                <div className="orbit-circle w-[400px] h-[400px] border-emerald-500/10"></div>
                <div className="orbit-circle w-[600px] h-[600px] border-white/5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-[#27272a] border border-white/10 px-4 py-1.5 mb-10">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-emerald-500 text-[10px] font-mono uppercase tracking-widest">System Online v2.5</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tighter uppercase">
                    WEBSITE<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200">.FUN</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Deploy your digital presence with high-performance infrastructure. <span className="text-white font-semibold">AI-Integrated</span> solutions for the modern web.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 font-mono text-sm tracking-widest border border-emerald-500 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center space-x-3 uppercase"
                    >
                        <span>Initialize Project</span>
                        <MessageSquare className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#portfolio"
                        className="px-10 py-4 font-mono text-sm tracking-widest border border-white/10 hover:border-emerald-500 text-gray-300 hover:text-emerald-500 transition-all uppercase bg-white/5 hover:bg-white/10"
                    >
                        View Database
                    </a>
                </div>

                <div className="mt-24 border-t border-white/5 pt-10 flex justify-center items-center space-x-12 opacity-40">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Supported Networks</div>
                    <div className="h-4 w-20 bg-gray-700/50"></div>
                    <div className="h-4 w-28 bg-gray-700/50"></div>
                    <div className="h-4 w-24 bg-gray-700/50"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
