import React from 'react';
import { Briefcase, BarChart3, Users, Brain, GraduationCap, Wrench } from 'lucide-react';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-3xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all text-left">
    <div className="text-cyan-400 mb-6">{icon}</div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const WhatWeDo = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">What We <span className="text-cyan-400">Do</span></h2>
      <p className="text-gray-500">Our core pillars that make PM Club NSUT the ultimate destination.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard icon={<Briefcase size={28}/>} title="Projects" desc="Work on industry-level projects with real-world impact." />
      <FeatureCard icon={<BarChart3 size={28}/>} title="Analysis" desc="Build case studies and product flows to sharpen your skills." />
      <FeatureCard icon={<Users size={28}/>} title="Collaboration" desc="Work with designers, data analysts, and developers." />
      <FeatureCard icon={<Brain size={28}/>} title="Mindset" desc="Learn to think like a Product Manager in every situation." />
      <FeatureCard icon={<GraduationCap size={28}/>} title="Placement Prep" desc="Get ready for PM, Analyst, and Strategy interviews." />
      <FeatureCard icon={<Wrench size={28}/>} title="Tools Training" desc="Master Figma, Notion, SQL, and AI tools hands-on." />
    </div>
  </section>
);

export default WhatWeDo;