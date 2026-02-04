import React from 'react';
import { Zap, Cpu, Shield } from 'lucide-react';

const SolutionCards: React.FC = () => {
    return (
        <section id="solution" className="py-32 relative border-t border-white/5 bg-[#18181b]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Core Protocols</div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">SYSTEM <span className="text-emerald-500">ADVANTAGES</span></h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-right font-mono text-xs">Engineered for maximum efficiency and autonomy.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Zap className="w-8 h-8 text-yellow-400" />,
                            title: "HYPERVELOCITY",
                            desc: "Sub-millisecond response times. Optimized for search engine crawling bots."
                        },
                        {
                            icon: <Cpu className="w-8 h-8 text-emerald-400" />,
                            title: "NEURAL NETWORK",
                            desc: "Autonomous agent integration capabilities standard on all deployments."
                        },
                        {
                            icon: <Shield className="w-8 h-8 text-blue-400" />,
                            title: "MILITARY GRADE",
                            desc: "Enterprise encryption protocols. Zero-trust architecture implementation."
                        }
                    ].map((item, i) => (
                        <div key={i} className="tech-card p-8 group hover:bg-[#202023] transition-colors">
                            <div className="mb-6 p-3 bg-white/5 w-fit border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight font-mono">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-emerald-500 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionCards;
