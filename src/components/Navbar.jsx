import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black text-xs italic">P</div>
      <span className="text-xl font-bold tracking-tight">PM Club <span className="text-cyan-400">NSUT</span></span>
    </Link>
    <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
      <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
      <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
      <Link to="/what-we-do" className="hover:text-cyan-400 transition-colors">What We Do</Link>
      <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
    </div>
    <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-full transition-all text-sm">
      Apply Now
    </button>
  </nav>
);

export default Navbar;