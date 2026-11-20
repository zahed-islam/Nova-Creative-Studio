import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="section-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="text-2xl font-black text-white">NOVA<span className="text-indigo-400">.</span></Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            We create thoughtful digital experiences that help brands move forward.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Link className="hover:text-white" to="/">Home</Link>
            <Link className="hover:text-white" to="/about">About</Link>
            <Link className="hover:text-white" to="/services">Services</Link>
            <Link className="hover:text-white" to="/gallery">Gallery</Link>
            <Link className="hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Get in touch</h3>
          <p className="mt-4 text-sm text-slate-400">hello@novastudio.com</p>
          <p className="mt-2 text-sm text-slate-400">Chattogram, Bangladesh</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col justify-center gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Nova Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}