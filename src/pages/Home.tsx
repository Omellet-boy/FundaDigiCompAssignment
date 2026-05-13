import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FadeIn, Section } from '../components/Common';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden font-sans">
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

      <Section className="bg-slate-50 border-y border-slate-200">
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
    </>
  );
}
