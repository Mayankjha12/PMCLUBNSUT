import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="pt-20 pb-10 px-8 border-t border-slate-900 bg-[#020617]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-left">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-cyan-500 rounded font-bold text-black text-[10px] flex items-center justify-center">P</div>
          <span className="font-bold text-white">PM Club NSUT</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">Product Management & Analytics Club of Netaji Subhas University of Technology, Delhi.</p>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Quick Links</h4>
        <ul className="text-gray-500 text-sm space-y-3">
          <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
          <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
          <li><a href="/what-we-do" className="hover:text-cyan-400 transition-colors">What We Do</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Get in Touch</h4>
        <ul className="text-gray-500 text-sm space-y-4">
          {/* Email Link */}
          <li>
            <a href="mailto:pmclub@nsut.ac.in" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
              <Mail size={16} className="text-cyan-400"/> 
              pmclub@nsut.ac.in
            </a>
          </li>

          {/* Instagram Link */}
          <li>
            <a 
              href="https://www.instagram.com/pmclubnsut/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
            >
              <Instagram size={16} className="text-cyan-400"/> 
              @pmclub_nsut
            </a>
          </li>

          {/* Linkedin Link */}
          <li>
            <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
              <Linkedin size={16} className="text-cyan-400"/> 
              PM Club NSUT
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex justify-between text-[10px] text-gray-600 uppercase tracking-widest">
      <p>© 2024 PM Club NSUT. All rights reserved.</p>
      <p>Made with 💙 by the Tech Team</p>
    </div>
  </footer>
);

export default Footer;
