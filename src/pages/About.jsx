import React from 'react';

const About = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">About <span className="text-cyan-400">Us</span></h2>
      <p className="text-gray-400 italic font-light italic text-lg max-w-2xl mx-auto">
        "We are the Product Management & Analytics Club of NSUT, building the next generation of product leaders."
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-gray-400 text-lg leading-relaxed">
          PM Club NSUT is a community that explores the world of Product, Analytics, and Strategy. We cater to those interested in non-tech roles, problem-solving, and building products that matter.
        </p>
        <div className="text-xl font-bold">Our workflow: <span className="text-cyan-400">Idea ➔ Execution ➔ Impact</span></div>
        <div className="flex flex-wrap gap-2 pt-4">
          {['Industry Projects', 'Collaborative Teams', 'Product Thinking'].map(t => (
            <span key={t} className="px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-gray-300 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-10 bg-slate-900/60 border border-slate-800 rounded-[32px] relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
          </div> 
          Our Mission
        </h3>
        <p className="text-gray-400 leading-relaxed text-base">
          To prepare students for Product, Analyst, and Strategy roles by teaching them how to think like Product Managers. We focus on case solving, guesstimates, resume building, and making members job-ready.
        </p>
        <p className="mt-8 italic text-gray-500 text-sm">"Learn, Teach & Compete Together"</p>
      </div>
    </div>
  </section>
);

export default About;