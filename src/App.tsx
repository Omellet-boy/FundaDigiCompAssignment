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
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center rotate-45 transition-transform group-hover:rotate-[135deg]">
              <div className="w-4 h-4 bg-white -rotate-45"></div>
            </div>
            <span className="font-display font-bold text-2xl tracking-[0.2em] uppercase text-white">WhiteNet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex gap-8 text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <button className="px-6 py-2 border border-white/20 hover:border-white text-[10px] font-bold tracking-widest uppercase transition-all bg-white/5">
              CLIENT PORTAL [SECURE]
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 uppercase tracking-widest text-[10px] font-bold text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/70 hover:text-white"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] tracking-[0.3em] uppercase text-cyan-400 font-bold mb-8">
                  Hyper-Aggressive Simulation
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} y={30}>
                <h1 className="text-6xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 text-white">
                  Everything <br/> <span className="font-bold">Laid Bare.</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <p className="text-lg md:text-xl text-white/50 max-w-lg mb-12 leading-relaxed font-light">
                  Our unique cybersecurity model operates beyond the passive bounds of ethics. We push your systems to the absolute limit.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]">
                    Request Audit <ArrowRight size={16} />
                  </button>
                  <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors flex items-center justify-center">
                    Case Studies
                  </button>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.8} y={50}>
              <div className="stark-border bg-black relative p-10 flex flex-col justify-between overflow-hidden gap-10 min-h-[400px]">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/10">ID: WNET-09X-ALPHA</div>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Current Risk Landscape</div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex justify-between font-mono text-sm border-b border-white/5 pb-2">
                      <span className="text-white/40">VULN_DB_ENTRIES</span>
                      <span className="text-cyan-400">1,402</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm border-b border-white/5 pb-2">
                      <span className="text-white/40">ACTIVE_SIMS</span>
                      <span className="text-cyan-400">24</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm border-b border-white/5 pb-2">
                      <span className="text-white/40">CERT_AUTHORITY</span>
                      <span className="text-cyan-400">6/6</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-cyan-500/20 bg-black/50 text-[10px] font-mono text-cyan-500/80 leading-relaxed uppercase">
                  SYSTEM STATUS: HYPER-VIGILANT MODE ACTIVE<br />
                  SCANNING_SCOPE: WIDE_TARGET_ARRAY<br />
                  SECURITY_PARADIGM: PARANOID_STANDARD
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <div className="bg-black border-y border-white/10 relative z-10">
        <Section id="about">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-start">
            <FadeIn>
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-400 sticky top-32 flex items-center gap-3">
                <span className="w-8 h-px bg-cyan-400"></span>
                Philosophy
              </h2>
            </FadeIn>
            
            <div className="space-y-16">
              <FadeIn delay={0.2}>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight text-white uppercase">
                  Exposing failure points <span className="text-white/30">before adversaries do.</span>
                </h3>
                <p className="mt-8 text-xl text-white/50 leading-relaxed font-light">
                   "WhiteNet" is chosen with "White" being the symbolism of having everything laid bare. We operate beyond the passive bounds of ethics—we push systems to the absolute limit with undeniable results.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-px bg-white/10">
                <div className="p-10 bg-black group transition-colors hover:bg-white/5">
                  <h4 className="font-display font-bold text-lg mb-4 text-cyan-400 uppercase tracking-widest">Aggressive Model</h4>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    If they cannot survive our penetration test, they rarely will survive a real threat. Our model pushes testing to simulate real-life targeted attacks.
                  </p>
                </div>
                <div className="p-10 bg-black group transition-colors hover:bg-white/5">
                  <h4 className="font-display font-bold text-lg mb-4 text-cyan-400 uppercase tracking-widest">B2B Authority</h4>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    Focusing on High-Stakes Enterprises where data leaks cause irrevocable damage. We build trust through certifications and irradiance.
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
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">TARGET PROFILES</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "High Stakes Enterprises",
              desc: "Fintech, Healthcare, and E-commerce platforms where a single leak correlates to millions in lost revenue.",
              icon: Target,
              id: "01"
            },
            {
              title: "Security Organizations",
              desc: "Teams seeking to adopt 'paranoid requirements' to ensure the absolute safety of critical corporate assets.",
              icon: Lock,
              id: "02"
            },
            {
              title: "CISO & CTO Leadership",
              desc: "Visionaries who understand that passive defense is obsolete and agree with our company's core philosophy.",
              icon: UserCheck,
              id: "03"
            }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.2 * i} y={30}>
              <div className="stark-border p-8 hover:border-cyan-500/50 transition-all h-full flex flex-col relative group">
                <span className="absolute top-6 right-8 text-4xl font-bold text-white/5">{item.id}</span>
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <item.icon className="text-cyan-400" size={20} />
                </div>
                <h4 className="text-lg font-display font-bold mb-4 text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 flex-grow">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <div className="bg-white/5 border-y border-white/10 z-10 relative">
        <Section id="services">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <FadeIn>
                <div className="mono-label mb-6 text-cyan-400">Core Services</div>
                <h2 className="text-5xl font-display font-black tracking-tight mb-8">TACTICAL<br />VECTOR<br />ANALYSIS.</h2>
                <p className="text-white/40 mb-12 text-sm font-light leading-relaxed">
                  We don't offer standard checklists. We offer simulated hostile takeovers to prove your defenses can actually resist a dedicated adversary.
                </p>
                <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-cyan-400 transition-colors">
                  Full Service List
                </button>
              </FadeIn>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                { title: "Hyper-Aggressive Pen-Testing", icon: Search },
                { title: "Simulated Targeted Attacks", icon: Zap },
                { title: "Custom Security Architecture", icon: Shield },
                { title: "Vulnerability Intel Feed", icon: Database }
              ].map((service, i) => (
                <div key={i} className="bg-black p-10 group hover:bg-cyan-950/20 transition-all">
                  <service.icon size={28} className="text-white/30 mb-6 group-hover:text-cyan-400 transition-colors" />
                  <h4 className="text-lg font-display font-bold mb-0 uppercase tracking-widest leading-tight">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* S.M.A.R.T Goals / Roadmap */}
      <Section id="roadmap" className="relative z-10">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Milestones</div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">OPERATIONAL TIMELINE</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { q: "Q1", title: "Certification", status: "READY" },
            { q: "Q2", title: "Solidification", status: "IN_PROGRESS" },
            { q: "Q3", title: "Acceleration", status: "PENDING" },
            { q: "Q4", title: "Legacy", status: "PENDING" }
          ].map((step, i) => (
            <FadeIn key={i} delay={0.15 * i} y={30}>
              <div className="stark-border p-8 flex flex-col h-full hover:border-cyan-500/30 transition-all">
                <span className="text-4xl font-display font-black text-white/10 mb-4">{step.q}</span>
                <h4 className="text-sm font-display font-bold mb-2 uppercase tracking-widest">{step.title}</h4>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[8px] font-mono tracking-widest text-white/30">
                  <div className={`w-1.5 h-1.5 rounded-full ${step.status === 'READY' ? 'bg-cyan-400 animate-pulse' : 'bg-white/10'}`}></div>
                  {step.status}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="z-10 relative">
        <div className="max-w-4xl mx-auto stark-border p-12 lg:p-20 relative overflow-hidden bg-black/80">
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10 tracking-[0.5em] origin-top-right rotate-90 whitespace-nowrap">SECURE_CHANNEL_ESTABLISHED</div>
          
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-4xl font-display font-black tracking-tight mb-4 uppercase">INITIATE ANALYSIS</h2>
              <p className="text-white/40 text-sm font-light">Send encrypted coordinates for initial asset landscape evaluation.</p>
            </div>
          </FadeIn>
          
          <form className="grid md:grid-cols-2 gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              <div className="group">
                <label className="mono-label block mb-2 text-white/20 group-focus-within:text-cyan-400 transition-colors">Lead Officer</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white font-light text-sm" placeholder="NAME / CODENAME" />
              </div>
              <div className="group">
                <label className="mono-label block mb-2 text-white/20 group-focus-within:text-cyan-400 transition-colors">Corporate Entity</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white font-light text-sm" placeholder="COMPANY NAME" />
              </div>
            </div>
            
            <div className="space-y-8 flex flex-col justify-between">
              <div className="group">
                <label className="mono-label block mb-2 text-white/20 group-focus-within:text-cyan-400 transition-colors">Operational Notes</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-cyan-400 transition-colors text-white font-light text-xs" placeholder="Landscape briefing..."></textarea>
              </div>
              <button className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-cyan-400 transition-all shadow-xl group">
                DEPLOY SCAN <ChevronRight size={14} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto py-12 px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-white -rotate-45"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-[0.2em] uppercase text-white">WhiteNet</span>
            </div>

            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono tracking-[0.2em] uppercase text-white/30">
              <div>Net Stats: <span className="text-white">10.2k+ Traffic</span></div>
              <div>Projects: <span className="text-white">02 Tier-1 Active</span></div>
              <div>Region: <span className="text-white">Global Enterprise</span></div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 border border-white/10 hover:border-white transition-all text-white/40 hover:text-white"><Linkedin size={16} /></a>
              <a href="#" className="p-3 border border-white/10 hover:border-white transition-all text-white/40 hover:text-white"><Globe size={16} /></a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[10px] text-white/20 italic tracking-widest uppercase">
              “IF YOU CANNOT SURVIVE US, YOU CANNOT SURVIVE THE THREAT.”
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
