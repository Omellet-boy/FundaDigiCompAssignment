import React from 'react';
import { Search, Zap, Shield, Database } from 'lucide-react';
import { FadeIn, Section } from '../components/Common';

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Section id="services">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <FadeIn>
              <div className="mono-label mb-6 text-primary">Core Services</div>
              <h2 className="text-5xl font-display font-bold tracking-tight mb-8 uppercase text-slate-900">TACTICAL<br />SERVICE<br />SUITE.</h2>
              <p className="text-slate-600 mb-12 text-sm font-light leading-relaxed">
                We don't offer standard checklists. We offer simulated hostile takeovers to prove your defenses can actually resist a dedicated adversary.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white stark-border">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Broad Scope</h4>
                  <p className="text-slate-500 text-xs">Analyzing every possible entry vector from physical to digital.</p>
                </div>
                <div className="p-6 bg-white stark-border">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Undeniable Proof</h4>
                  <p className="text-slate-500 text-xs">Providing raw data and logs of every successful breach attempt.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-300 shadow-xl">
            {[
              { 
                title: "Aggressive Pen-Testing", 
                icon: Search,
                desc: "Utilizing modern adversarial techniques to identify hidden vulnerabilities before they can be exploited."
              },
              { 
                title: "Targeted Attack Simulation", 
                icon: Zap,
                desc: "Full-scale simulations of targeted hostile takeovers to test your internal response protocols."
              },
              { 
                title: "Paranoid Architecture", 
                icon: Shield,
                desc: "Designing and refactoring systems with zero-trust principles at the core."
              },
              { 
                title: "Vulnerability Intel Feed", 
                icon: Database,
                desc: "Real-time updates on emerging threats specifically tailored to your industry landscape."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-12 group hover:bg-slate-50 transition-all flex flex-col h-full">
                <service.icon size={32} className="text-slate-400 mb-8 group-hover:text-primary transition-colors" />
                <h4 className="text-xl font-display font-bold mb-4 uppercase tracking-widest leading-tight text-slate-900">{service.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Scope Details <Shield size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 uppercase tracking-widest">Ready to test your limits?</h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              Our consultants are ready to deploy a custom simulation tailored to your specific organizational needs.
            </p>
            <button className="bg-white text-primary px-12 py-4 font-bold uppercase tracking-tighter text-sm hover:bg-slate-200 transition-colors">
              Schedule Initial Briefing
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
