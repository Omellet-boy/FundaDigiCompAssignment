import React, { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Menu, 
  X, 
  Linkedin, 
  Globe 
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="min-h-screen relative bg-[var(--color-bg-base)] text-slate-900 antialiased font-sans">
      {/* Universal Background Pattern */}
      <div className="fixed inset-0 bg-dot-pattern opacity-10 pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass h-20' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center rotate-45 transition-transform group-hover:rotate-[135deg]">
              <div className="w-4 h-4 bg-primary -rotate-45"></div>
            </div>
            <span className="font-display font-bold text-2xl tracking-[0.1em] uppercase text-primary">WhiteNet</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`hover:text-primary transition-colors relative group ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all group-hover:w-full ${location.pathname === link.href ? 'w-full' : 'w-0'}`}></span>
                </Link>
              ))}
            </nav>
            <button className="px-6 py-2 border-2 border-primary text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-primary hover:text-white">
              CLIENT PORTAL
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 gap-6 uppercase tracking-widest text-[10px] font-bold text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-slate-600 hover:text-primary ${location.pathname === link.href ? 'text-primary' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-24 min-h-[calc(100vh-200px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto py-12 px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-primary -rotate-45"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-[0.1em] uppercase text-primary">WhiteNet</span>
            </div>

            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400">
              <div>Network: <span className="text-slate-900">10.2k+ Monthly</span></div>
              <div>Sims: <span className="text-slate-900">24 Active</span></div>
              <div>Scope: <span className="text-slate-900">Global B2B</span></div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 border border-slate-100 hover:border-primary transition-all text-slate-300 hover:text-primary"><Linkedin size={16} /></a>
              <a href="#" className="p-3 border border-slate-100 hover:border-primary transition-all text-slate-300 hover:text-primary"><Globe size={16} /></a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[10px] text-slate-300 italic tracking-widest uppercase">
              WhiteNet Cybersecurity Consultancy &copy; 2026. All Systems Vigilant.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
