/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Search, 
  Target, 
  Linkedin, 
  Award, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Zap,
  Lock,
  Globe,
  UserCheck
} from 'lucide-react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0, y = 20, className = "" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Universal Background Pattern */}
      <div className="fixed inset-0 bg-dot-pattern opacity-10 pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass h-20' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center rotate-45 transition-transform group-hover:rotate-[135deg]">
              <div className="w-4 h-4 bg-primary -rotate-45"></div>
            </div>
            <span className="font-display font-bold text-2xl tracking-[0.1em] uppercase text-primary">WhiteNet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                </a>
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
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 uppercase tracking-widest text-[10px] font-bold text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-600 hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden z-10 font-sans">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-block px-3 py-1 bg-primary/5 border border-primary/20 text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-8">
                  Security Integrity Since 2026
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} y={30}>
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8 text-primary uppercase">
                  Everything <br/> <span className="text-accent underline decoration-slate-200 underline-offset-8 font-light">Laid Bare.</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-12 leading-relaxed font-light">
                  A radical Cybersecurity Consultancy Firm. We push your systems to the absolute limit with broad targets and undeniable results.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-white px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                    Request Audit <ArrowRight size={16} />
                  </button>
                  <button className="px-10 py-4 border-2 border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors flex items-center justify-center">
                    Case Studies
                  </button>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.8} y={50}>
              <div className="stark-border relative p-10 flex flex-col justify-between overflow-hidden gap-10 min-h-[400px]">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-200">ID: WNET-CORP-A</div>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Simulated Threat Level</div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-accent"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex justify-between font-mono text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-400">VULN_DATA_POINTS</span>
                      <span className="text-primary font-bold">1,402</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-400">ACTIVE_PROJECTS</span>
                      <span className="text-primary font-bold">24</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-400">CERTIFICATIONS</span>
                      <span className="text-primary font-bold">6/6</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-600 leading-relaxed uppercase">
                  STATUS: OPERATIONAL<br />
                  ENCRYPTION: ACTIVE_AES_256<br />
                  PROTOCOL: PARANOID_STANDARD
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <div className="bg-white border-y border-slate-200 relative z-10 shadow-sm">
        <Section id="about">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-start">
            <FadeIn>
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary sticky top-32 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary"></span>
                Company
              </h2>
            </FadeIn>
            
            <div className="space-y-16">
              <FadeIn delay={0.2}>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-slate-900 uppercase">
                  Exposing failure <span className="text-slate-400">before the threat does.</span>
                </h3>
                <p className="mt-8 text-xl text-slate-600 leading-relaxed font-light">
                   "WhiteNet" is chosen with "White" being the symbolism of having everything laid bare. We operate for those who require more than standard security—those who require paranoid resilience.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                <div className="p-10 bg-white group transition-colors hover:bg-slate-50">
                  <h4 className="font-display font-bold text-lg mb-4 text-primary uppercase tracking-widest">Aggressive Sim</h4>
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    If they cannot survive our penetration test, they rarely will survive a real threat. Our model pushes testing to simulate real-life targeted attacks.
                  </p>
                </div>
                <div className="p-10 bg-white group transition-colors hover:bg-slate-50">
                  <h4 className="font-display font-bold text-lg mb-4 text-primary uppercase tracking-widest">Enterprise Class</h4>
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    Focusing on High-Stakes Enterprises where data leaks cause irrevocable damage. We build legacy through irrefutable results and verified data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Audience Profiles */}
      <Section id="audience" className="relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase text-primary">STRATEGIC FOCUS</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "High Stakes Enterprises",
              desc: "Fintech, Healthcare, and E-commerce platforms where a single leak is catastrophic.",
              icon: Target,
              id: "01"
            },
            {
              title: "Security Organizations",
              desc: "Teams seeking to adopt 'paranoid requirements' to ensure total asset safety.",
              icon: Lock,
              id: "02"
            },
            {
              title: "CISO & CTO Leadership",
              desc: "Visionaries who understand that passive defense is obsolete and require active offense.",
              icon: UserCheck,
              id: "03"
            }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.2 * i} y={30}>
              <div className="stark-border p-8 hover:border-primary/50 transition-all h-full flex flex-col relative group">
                <span className="absolute top-6 right-8 text-4xl font-bold text-slate-100">{item.id}</span>
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h4 className="text-lg font-display font-bold mb-4 text-slate-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <div className="bg-slate-100 border-y border-slate-200 z-10 relative">
        <Section id="services">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <FadeIn>
                <div className="mono-label mb-6 text-primary">Core Services</div>
                <h2 className="text-5xl font-display font-bold tracking-tight mb-8 uppercase text-slate-900">TACTICAL<br />SERVICE<br />SUITE.</h2>
                <p className="text-slate-600 mb-12 text-sm font-light leading-relaxed">
                  We don't offer standard checklists. We offer simulated hostile takeovers to prove your defenses can actually resist a dedicated adversary.
                </p>
                <button className="px-8 py-3 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-colors">
                  Full Service List
                </button>
              </FadeIn>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-300">
              {[
                { title: "Aggressive Pen-Testing", icon: Search },
                { title: "Targeted Attack Simulation", icon: Zap },
                { title: "Paranoid Architecture", icon: Shield },
                { title: "Vulnerability Intel Feed", icon: Database }
              ].map((service, i) => (
                <div key={i} className="bg-white p-10 group hover:bg-slate-50 transition-all">
                  <service.icon size={28} className="text-slate-400 mb-6 group-hover:text-primary transition-colors" />
                  <h4 className="text-lg font-display font-bold mb-0 uppercase tracking-widest leading-tight text-slate-900">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* S.M.A.R.T Goals / Roadmap */}
      <Section id="roadmap" className="relative z-10">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Milestones 2026</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase text-primary">OPERATIONAL ROADMAP</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { q: "Q1", title: "Certification", status: "COMPLETE" },
            { q: "Q2", title: "Solidification", status: "ACTIVE" },
            { q: "Q3", title: "Acceleration", status: "SCHEDULED" },
            { q: "Q4", title: "Legacy", status: "PLANNED" }
          ].map((step, i) => (
            <FadeIn key={i} delay={0.15 * i} y={30}>
              <div className="stark-border p-8 flex flex-col h-full hover:border-primary/30 transition-all">
                <span className="text-4xl font-display font-bold text-slate-100 mb-4">{step.q}</span>
                <h4 className="text-sm font-display font-bold mb-2 uppercase tracking-widest text-slate-900">{step.title}</h4>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[8px] font-mono tracking-widest text-slate-400">
                  <div className={`w-1.5 h-1.5 rounded-full ${step.status === 'COMPLETE' ? 'bg-green-600' : step.status === 'ACTIVE' ? 'bg-primary animate-pulse' : 'bg-slate-200'}`}></div>
                  {step.status}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="z-10 relative">
        <div className="max-w-4xl mx-auto stark-border p-12 lg:p-20 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-slate-200 tracking-[0.5em] origin-top-right rotate-90 whitespace-nowrap">NETWORK_LAYER_SECURED</div>
          
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-4xl font-display font-bold tracking-tight mb-4 uppercase text-primary underline decoration-accent decoration-4">INITIATE CONSULT</h2>
              <p className="text-slate-500 text-sm font-light">Request a comprehensive simulation proposal for your organization.</p>
            </div>
          </FadeIn>
          
          <form className="grid md:grid-cols-2 gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              <div className="group">
                <label className="mono-label block mb-2 text-slate-400 group-focus-within:text-primary transition-colors">Point of Contact</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-light text-sm" placeholder="FULL NAME" />
              </div>
              <div className="group">
                <label className="mono-label block mb-2 text-slate-400 group-focus-within:text-primary transition-colors">Corporate Email</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-light text-sm" placeholder="EMAIL@COMPANY.COM" />
              </div>
            </div>
            
            <div className="space-y-8 flex flex-col justify-between">
              <div className="group">
                <label className="mono-label block mb-2 text-slate-400 group-focus-within:text-primary transition-colors">Landscape Brief</label>
                <textarea rows={3} className="w-full bg-slate-50 border-2 border-slate-100 p-4 focus:outline-none focus:border-primary transition-colors text-slate-900 font-light text-xs" placeholder="Describe your asset landscape..."></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center group">
                SUBMIT FOR ANALYSIS <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </Section>

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
