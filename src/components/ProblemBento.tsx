import React from 'react';
import { AlertCircle, Code, ArrowRight } from 'lucide-react';

const ProblemBento: React.FC = () => {
    return (
        <section id="problem" className="py-32 bg-[#18181b] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white uppercase tracking-tighter">IDENTIFIED <span className="text-emerald-500">ISSUES</span></h2>
                    <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">System Vulnerabilities Detected</p>
                </div>

                <div className="bento-grid">
                    {/* Card 1: Main Problem */}
                    <div className="col-span-12 md:col-span-7 tech-card p-10 group">
                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8">
                            <AlertCircle className="text-red-500 w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white uppercase font-mono">Digital Credibility Crisis</h3>
                        <p className="text-gray-400 leading-relaxed">
                            90% of requests fail due to poor digital presence. Manual operations are obsolete.
                        </p>
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="text-red-500 w-5 h-5 -rotate-45" />
                        </div>
                    </div>

                    {/* Card 2: Small Problem */}
                    <div className="col-span-12 md:col-span-5 tech-card p-10 flex flex-col justify-center border-l-4 border-l-emerald-500/20">
                        <h4 className="text-lg font-bold mb-4 text-emerald-500 uppercase tracking-widest font-mono">Latency High</h4>
                        <p className="text-gray-400 text-sm">Without optimized infrastructure, your conversion rates will drop to zero.</p>
                    </div>

                    {/* Card 3: Automation */}
                    <div className="col-span-12 md:col-span-4 tech-card p-8 text-center flex flex-col items-center justify-center">
                        <Code className="text-gray-500 w-8 h-8 mb-4" />
                        <h4 className="font-bold mb-2 text-white font-mono uppercase text-xs tracking-widest">Manual Override</h4>
                        <p className="text-xs text-gray-500">Repetitive tasks detected. Automation required.</p>
                    </div>

                    {/* Card 4: Big Solution Teaser */}
                    <div className="col-span-12 md:col-span-8 bg-emerald-900/20 border border-emerald-500/30 p-10 flex items-center justify-between group overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white mb-2 uppercase italic">Initiate Upgrade Protocol</h3>
                            <p className="text-emerald-100/70 max-w-sm text-sm font-mono">Join the top 1% network.</p>
                        </div>
                        <div className="w-12 h-12 border border-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                            <ArrowRight className="text-emerald-500 group-hover:text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemBento;
