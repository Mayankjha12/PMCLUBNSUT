import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => (
  <section className="relative pt-20 pb-32 px-6 overflow-hidden min-h-screen">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full text-[11px] font-medium text-cyan-400 mb-10 tracking-wider uppercase">
        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
        Recruitment Open for 2024-25
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
        PM CLUB <span className="text-cyan-400">NSUT</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
        Where curious minds become product thinkers.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-10 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          Apply Now <ArrowRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-24">
        {[ {n: '100+', t: 'Active Members'}, {n: '20+', t: 'Projects Completed'}, {n: '50+', t: 'Placements'} ].map((s, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{s.n}</div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">{s.t}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Home;