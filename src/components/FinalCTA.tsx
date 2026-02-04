import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#18181b] border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="bg-emerald-900/10 border border-emerald-500/20 p-16 md:p-24 text-center relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-500"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-500"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500"></div>

                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">UPGRADE <br />INFRASTRUCTURE</h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-mono">Don't let your business become obsolete. Initialize your transformation protocol today.</p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        className="inline-flex items-center space-x-4 bg-emerald-600 text-white px-12 py-5 font-mono font-bold text-lg uppercase tracking-widest hover:bg-emerald-700 transition-colors border border-emerald-500"
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span>Establish Uplink</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
