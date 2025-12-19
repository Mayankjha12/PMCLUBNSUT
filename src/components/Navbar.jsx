import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react'; // Icons import karlo

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black text-xs italic">P</div>
      <span className="text-xl font-bold tracking-tight text-white">PM Club <span className="text-cyan-400">NSUT</span></span>
    </Link>

    {/* Footer.jsx ke andar "Get in Touch" section */}
<div>
  <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Get in Touch</h4>
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
        @pmclubnsut
      </a>
    </li>

    {/* Linkedin - Isse abhi span hi rehne dete hain jaisa aapne kaha */}
    <li className="flex items-center gap-3">
      <Linkedin size={16} className="text-cyan-400"/> 
      <span>PM Club NSUT</span>
    </li>
  </ul>
</div>
    
    <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-full transition-all text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
      Apply Now
    </button>
  </nav>
);

export default Navbar;
