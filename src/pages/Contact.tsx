import React from 'react';
import { ChevronRight, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn, Section } from '../components/Common';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Section id="contact" className="z-10 relative">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="space-y-12">
            <FadeIn>
              <div className="mono-label mb-6 text-primary">Secure Channel</div>
              <h2 className="text-5xl font-display font-bold tracking-tight mb-8 uppercase text-slate-900">INITIATE<br />CONSULT.</h2>
              <p className="text-slate-600 mb-12 text-sm font-light leading-relaxed">
                Send encrypted coordinates for initial asset landscape evaluation. We respond within 24 operational hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white stark-border flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-1">Encrypted Mail</h5>
                    <p className="text-sm font-bold text-slate-900">test@whitenet.consulting</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white stark-border flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-1">Direct Line</h5>
                    <p className="text-sm font-bold text-slate-900">+60 555555555</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white stark-border flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-1">Global HQ</h5>
                    <p className="text-sm font-bold text-slate-900">Level B69, Bunker, Somewhere</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="max-w-4xl mx-auto stark-border p-12 lg:p-20 relative overflow-hidden bg-white shadow-2xl">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-slate-200 tracking-[0.5em] origin-top-right rotate-90 whitespace-nowrap">NETWORK_LAYER_SECURED</div>
              
              <div className="mb-12">
                <h2 className="text-4xl font-display font-bold tracking-tight mb-4 uppercase text-primary underline decoration-accent decoration-4">ANALYSIS REQUEST</h2>
                <p className="text-slate-500 text-sm font-light">Complete the form below to begin your organization's resilience evaluation.</p>
              </div>
              
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
                  <div className="group">
                    <label className="mono-label block mb-2 text-slate-400 group-focus-within:text-primary transition-colors">Target Scope</label>
                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-light text-sm">
                      <option>Full Adversarial Simulation</option>
                      <option>Vulnerability Assessment</option>
                      <option>Architecture Review</option>
                      <option>Custom Engagement</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-8 flex flex-col justify-between">
                  <div className="group">
                    <label className="mono-label block mb-2 text-slate-400 group-focus-within:text-primary transition-colors">Landscape Brief</label>
                    <textarea rows={6} className="w-full bg-slate-50 border-2 border-slate-100 p-4 focus:outline-none focus:border-primary transition-colors text-slate-900 font-light text-xs" placeholder="Describe your asset landscape and specific security goals..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center group">
                    SUBMIT FOR ANALYSIS <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>

      <div className="h-64 bg-slate-200 grayscale opacity-50 relative overflow-hidden">
        {/* Placeholder for map or tech pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[10px] tracking-[1em] text-slate-400 uppercase">Interactive Asset Topology Data</span>
        </div>
      </div>
    </div>
  );
}
