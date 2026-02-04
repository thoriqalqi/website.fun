import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../constants';

const ShowcaseSection: React.FC = () => {
    return (
        <section id="portfolio" className="py-32 bg-[#18181b] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">SUCCESS <span className="text-emerald-500">LOGS</span></h2>
                    <span className="font-mono text-emerald-500/50 text-xs tracking-widest">ARCHIVE_2024-2025</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {PORTFOLIO.map((item, i) => (
                        <a
                            key={i}
                            href={item.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative tech-card cursor-pointer aspect-[4/3] group-hover:border-emerald-500/30 transition-colors block"
                        >
                            <img
                                src={item.image}
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                alt={item.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/50 to-transparent p-8 flex flex-col justify-end">
                                <span className="text-emerald-500 text-[10px] font-mono uppercase tracking-widest mb-2 border-l-2 border-emerald-500 pl-2">{item.category}</span>
                                <h3 className="text-2xl font-bold text-white uppercase font-mono">{item.title}</h3>
                                <div className="h-[1px] w-full bg-white/10 mt-4 group-hover:bg-emerald-500/50 transition-colors"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
