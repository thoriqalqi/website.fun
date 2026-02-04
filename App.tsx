
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MessageSquare, ArrowRight, CheckCircle2, 
  AlertCircle, Smartphone, Zap, Globe, Cpu, Layers, Layout,
  Sun, Moon, Code, Shield, Sparkles, Database
} from 'lucide-react';
import { 
  WHATSAPP_LINK, NAV_LINKS, PRICING_PLANS, 
  WHY_US, PORTFOLIO 
} from './constants';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 border-b border-emerald-500/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center relative">
          
          {/* LEFT: Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0 group cursor-pointer">
            <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:rotate-12 transition-transform">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter dark:text-white text-gray-950 uppercase leading-none">website<span className="text-emerald-500">.fun</span></span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase">Digital Studio</span>
            </div>
          </div>
          
          {/* CENTER: Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="dark:text-gray-400 text-gray-600 hover:text-emerald-500 transition-all font-semibold text-sm uppercase tracking-widest">
                {link.label}
              </a>
            ))}
          </div>
          
          {/* RIGHT: Actions */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl dark:bg-emerald-950/30 bg-gray-100 dark:text-emerald-400 text-gray-600 border border-emerald-500/10 hover:border-emerald-500/40 transition-all"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              MULAI PROYEK
            </a>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleTheme} className="text-emerald-500">
               {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white text-gray-950">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass absolute w-full mt-2 py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="block font-bold text-lg dark:text-gray-200" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} className="block bg-emerald-600 text-center text-white py-4 rounded-2xl font-black">
            KONSULTASI SEKARANG
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg">
      {/* Background Decor */}
      <div className="orbit-container">
        <div className="orbit-circle w-[200px] h-[200px]"></div>
        <div className="orbit-circle w-[400px] h-[400px] border-emerald-500/5"></div>
        <div className="orbit-circle w-[600px] h-[600px] border-emerald-500/5"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
          <Sparkles className="text-emerald-500 w-4 h-4" />
          <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">AI-Powered Development 2025</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight dark:text-white text-gray-950 tracking-tighter uppercase">
          WEBSITE<span className="gradient-text">.FUN</span>
        </h1>
        
        <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Hadirkan pengalaman digital terbaik untuk pelanggan Anda. Kami membangun website performa tinggi dengan <span className="text-emerald-500 font-bold">Integrasi AI Cerdas</span> yang dirancang untuk meningkatkan kredibilitas dan pertumbuhan bisnis Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="group bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] flex items-center space-x-3 hover:scale-105 active:scale-95"
          >
            <span>KONSULTASI GRATIS</span>
            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/20 hover:border-emerald-500 hover:text-emerald-500 transition-all text-gray-400 backdrop-blur-sm"
          >
            LIHAT PORTFOLIO
          </a>
        </div>

        <div className="mt-20 flex justify-center items-center space-x-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-xs font-black uppercase tracking-widest text-gray-500">Trusted Partners</div>
          <div className="h-6 w-24 bg-gray-500 rounded-lg"></div>
          <div className="h-6 w-32 bg-gray-500 rounded-lg"></div>
          <div className="h-6 w-28 bg-gray-500 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

const ProblemBento: React.FC = () => {
  return (
    <section id="problem" className="py-32 dark:bg-[#020617] bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 dark:text-white uppercase">PROBLEMATIKA <span className="text-red-500">BISNIS</span></h2>
          <p className="text-gray-500 text-lg">Mengapa banyak UMKM tertinggal di era digital?</p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Main Problem */}
          <div className="col-span-12 md:col-span-7 glass p-10 rounded-[40px] glow-card">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8">
              <AlertCircle className="text-red-500 w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black mb-4 dark:text-white uppercase">Krisis Kredibilitas Digital</h3>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-lg">
              90% konsumen mencari bisnis Anda di Google sebelum membeli. Jika Anda hanya mengandalkan DM Instagram, Anda kehilangan ribuan peluang setiap bulannya.
            </p>
          </div>

          {/* Card 2: Small Problem */}
          <div className="col-span-12 md:col-span-5 glass p-10 rounded-[40px] glow-card flex flex-col justify-center">
            <h4 className="text-xl font-black mb-4 dark:text-emerald-400 text-emerald-600 uppercase tracking-widest">Slow Growth</h4>
            <p className="dark:text-gray-400 text-gray-600">Tanpa landing page, konversi iklan Anda akan terbuang sia-sia.</p>
          </div>

          {/* Card 3: Automation */}
          <div className="col-span-12 md:col-span-4 glass p-8 rounded-[40px] glow-card text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Code className="text-gray-400 w-6 h-6" />
            </div>
            <h4 className="font-bold mb-2">Manual Process</h4>
            <p className="text-sm text-gray-500">Lelah menjawab pertanyaan yang sama berulang kali?</p>
          </div>

          {/* Card 4: Big Solution Teaser */}
          <div className="col-span-12 md:col-span-8 bg-emerald-600 p-10 rounded-[40px] flex items-center justify-between group overflow-hidden relative">
             <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-2 uppercase italic">Waktunya Upgrade</h3>
                <p className="text-emerald-100 max-w-sm">Jadilah 1% teratas di industri Anda dengan infrastruktur digital tercanggih.</p>
             </div>
             <ArrowRight className="text-white w-16 h-16 opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCards: React.FC = () => {
  return (
    <section id="solution" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-emerald-500 font-black text-sm uppercase tracking-[0.4em] mb-4">The Solution</div>
            <h2 className="text-4xl md:text-6xl font-black dark:text-white tracking-tighter uppercase">KEUNGGULAN <span className="text-emerald-500 italic">WEBSITE.FUN</span></h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right font-medium">Kami memadukan teknik desain psikologis dengan performa teknologi tanpa kompromi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-10 h-10 text-yellow-400" />,
              title: "ULTRA SPEED",
              desc: "Website kami dimuat dalam hitungan milidetik. Google mencintai kecepatan, begitu juga pelanggan Anda."
            },
            {
              icon: <Cpu className="w-10 h-10 text-emerald-400" />,
              title: "AI INTEGRATED",
              desc: "Fitur AI Chatbot dan automasi data yang membuat website Anda seolah memiliki 'otak' sendiri."
            },
            {
              icon: <Shield className="w-10 h-10 text-blue-400" />,
              title: "FORTRESS SECURITY",
              desc: "Keamanan setingkat perusahaan besar dengan enkripsi terbaru dan SSL premium secara gratis."
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[40px] glow-card group">
              <div className="mb-8 p-4 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">{item.title}</h3>
              <p className="dark:text-gray-400 text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingBento: React.FC = () => {
  return (
    <section id="pricing" className="py-32 dark:bg-[#020617] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black dark:text-white tracking-tight uppercase">TRANSPARANSI <br /><span className="text-emerald-500 italic">HARGA</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`glass p-12 rounded-[50px] flex flex-col relative overflow-hidden ${plan.isPopular ? 'border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500' : ''}`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-8 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">
                  BEST VALUE
                </div>
              )}
              <h3 className="text-2xl font-black mb-2 dark:text-white uppercase">{plan.title}</h3>
              <div className="flex items-baseline space-x-2 mb-10">
                <span className="text-5xl font-black dark:text-emerald-400 text-emerald-600">{plan.price}</span>
                <span className="text-gray-500 font-bold">/ Project</span>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    <span className="dark:text-gray-300 text-gray-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <a 
                href={WHATSAPP_LINK} 
                className={`w-full py-5 rounded-2xl font-black text-center transition-all ${plan.isPopular ? 'bg-emerald-600 text-white shadow-xl hover:bg-emerald-700' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                PILIH PAKET
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShowcaseSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black dark:text-white uppercase">HALL OF <span className="text-emerald-500 italic">FAME</span></h2>
          <div className="h-[2px] flex-grow mx-10 bg-emerald-500/10 mb-4"></div>
          <span className="font-mono text-emerald-500 font-bold">2024 - 2025</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PORTFOLIO.map((item, i) => (
            <div key={i} className="group relative glass rounded-[40px] overflow-hidden border-0 glow-card aspect-[4/5] cursor-pointer">
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-3">{item.category}</span>
                <h3 className="text-2xl font-black text-white uppercase leading-tight mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Full Case Study <ArrowRight className="inline w-4 h-4 ml-1" /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-emerald-600 p-16 md:p-24 rounded-[60px] text-center shadow-[0_40px_100px_-20px_rgba(16,185,129,0.4)] relative group overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase">SIAP UNTUK <br />LEVEL BERIKUTNYA?</h2>
          <p className="text-emerald-50 text-xl mb-16 max-w-2xl mx-auto font-medium">Jangan biarkan bisnis Anda menjadi sejarah. Mari kita bangun masa depan bersama-sama hari ini.</p>
          
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center space-x-4 bg-white text-emerald-950 px-16 py-6 rounded-3xl font-black text-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <MessageSquare className="w-8 h-8" />
            <span>MULAI SEKARANG</span>
          </a>
          
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[80px]"></div>
        </div>
      </div>
    </section>
  );
};

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
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#020617] text-gray-100' : 'bg-white text-gray-950'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <ProblemBento />
      <SolutionCards />
      <ShowcaseSection />
      <PricingBento />
      
      {/* Why Us Bento Style */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2 glass p-10 rounded-[40px] flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 group-hover:rotate-12 transition-transform">
                  <Database className="w-20 h-20 text-emerald-500 opacity-20" />
               </div>
               <h3 className="text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter">Infrastruktur <br />Terukur</h3>
               <p className="text-gray-400">Arsitektur web yang siap menangani jutaan trafik tanpa gangguan.</p>
            </div>
            {WHY_US.slice(0, 2).map((item, i) => (
              <div key={i} className="glass p-10 rounded-[40px] glow-card text-center flex flex-col items-center justify-center">
                <div className="mb-6">{item.icon}</div>
                <h4 className="font-black uppercase mb-2 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
            <div className="md:col-span-4 glass p-10 rounded-[40px] flex items-center justify-between bg-gradient-to-r from-emerald-500/5 to-transparent">
               <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                     <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-xl font-black dark:text-white uppercase">Siap Mendunia</h4>
                     <p className="text-gray-500 text-sm">Bergabunglah dengan ratusan klien yang telah bertransformasi.</p>
                  </div>
               </div>
               <div className="hidden md:flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-black">USER</div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      
      {/* Floating WhatsApp with Sage Glow */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-emerald-600 text-white w-18 h-18 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(16,185,129,0.5)] transition-all hover:scale-110 active:scale-90 hover:rotate-6 p-4"
      >
        <MessageSquare size={36} />
      </a>
    </div>
  );
};

export default App;
