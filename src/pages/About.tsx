import React from 'react';
import { Target, Lock, UserCheck } from 'lucide-react';
import { FadeIn, Section } from '../components/Common';

export default function About() {
  return (
    <div className="space-y-12">
      {/* Origin Section */}
      <div className="bg-white border-b border-slate-200 relative z-10 shadow-sm">
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
    </div>
  );
}
