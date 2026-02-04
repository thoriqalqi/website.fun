
import React from 'react';
import { Layout, Shield, Zap, Cpu, Globe, Rocket } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20website.fun,%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20website.";

export const NAV_LINKS = [
  { label: 'Masalah', href: '#problem' },
  { label: 'Solusi', href: '#solution' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Harga', href: '#pricing' },
];

export const PRICING_PLANS = [
  {
    title: "Website UMKM",
    price: "1.5jt",
    features: [
      "Landing Page Modern",
      "Mobile Friendly",
      "WhatsApp Integration",
      "Free Hosting & Domain 1th",
      "SEO Basic",
      "Revisi 2x"
    ],
    isPopular: false
  },
  {
    title: "Company Profile",
    price: "2.5jt",
    features: [
      "Multi-Page (Up to 5)",
      "Premium Design",
      "Contact Form & Maps",
      "AI Content Assistant",
      "Keamanan SSL",
      "Revisi 5x"
    ],
    isPopular: true
  },
  {
    title: "Enterprise / Custom",
    price: "Hubungi Kami",
    features: [
      "Custom Automation",
      "AI Agent Integration",
      "E-commerce System",
      "Dashboard Khusus",
      "Support Prioritas",
      "Scalable Architecture"
    ],
    isPopular: false
  }
];

export const WHY_US = [
  {
    icon: <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Cepat & Tanggap",
    description: "Proses pengerjaan kilat dengan hasil yang tetap presisi dan profesional."
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: "AI Ready",
    description: "Website yang siap dikembangkan dengan fitur kecerdasan buatan masa kini."
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Aman & Handal",
    description: "Infrastruktur modern yang menjamin keamanan data bisnis Anda."
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Modern UI",
    description: "Desain yang eye-catching, futuristik, namun tetap mudah digunakan klien."
  }
];

export const PORTFOLIO = [
  {
    title: "Coffee Shop Millennial",
    category: "UMKM / Landing Page",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Tech Logistic Solutions",
    category: "Company Profile",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400"
  }
];
