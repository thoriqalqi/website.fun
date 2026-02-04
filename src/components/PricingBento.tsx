import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_LINK } from '../constants';

const PricingBento: React.FC = () => {
    return (
        <section id="pricing" className="py-32 bg-[#18181b] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">ACCESS <span className="text-emerald-500">LEVELS</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {PRICING_PLANS.map((plan, i) => (
                        <div key={i} className={`tech-card p-10 flex flex-col relative ${plan.isPopular ? 'border-emerald-500/50 bg-emerald-900/5' : ''}`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 font-mono text-[10px] uppercase tracking-widest">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-4 text-white uppercase font-mono">{plan.title}</h3>
                            <div className="flex items-baseline space-x-2 mb-8 border-b border-white/10 pb-8">
                                <span className="text-4xl font-black text-emerald-500">{plan.price}</span>
                                <span className="text-gray-600 font-mono text-xs">/ PROJECT</span>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((f, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 w-5 h-5" />
                                        <span className="text-gray-400 text-sm font-mono">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={WHATSAPP_LINK}
                                className={`w-full py-4 text-sm font-bold text-center transition-all font-mono uppercase tracking-widest border ${plan.isPopular ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                            >
                                Select Plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingBento;
