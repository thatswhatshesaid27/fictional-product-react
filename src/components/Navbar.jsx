import { useState } from "react";
import FormModal from "./FormModal"; // 👈 reuse same modal

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
      
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border-b border-white/10" />

      
        <div className="absolute -top-20 left-1/3 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
          <div className="font-marvel tracking-widest text-[#D4AF37] text-xl">
            <a href="#hero"> GAUNTLET</a>
           
          </div>

        
          <nav className="hidden md:flex items-center gap-10 font-gauntlet text-sm tracking-wide text-gray-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#CTA" className="hover:text-white transition">
              Decision
            </a>
          </nav>

          
          <div className="hidden md:block">
            <button
              onClick={() => setFormOpen(true)} 
              className="
                relative px-8 py-3 rounded-lg
                font-marvel tracking-widest uppercase text-black
                bg-gradient-to-r from-[#D4AF37] via-[#f5d76e] to-[#D4AF37]
                shadow-[0_0_30px_rgba(212,175,55,0.45)]
                hover:shadow-[0_0_60px_rgba(212,175,55,0.75)]
                hover:scale-105 active:scale-95
                transition-all duration-300
                overflow-hidden
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  translate-x-[-100%]
                  hover:translate-x-[100%]
                  transition-transform duration-700
                "
              />
              <span className="relative z-10">
                Grab it yours
              </span>
            </button>
          </div>

          
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

      
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col px-6 py-6 gap-6 font-gauntlet text-gray-300">
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#CTA" onClick={() => setMenuOpen(false)}>
                Decision
              </a>

              {/* MOBILE CTA */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setFormOpen(true);
                }}
                className="
                  mt-4 px-10 py-4 rounded-xl
                  font-marvel tracking-widest uppercase text-black
                  bg-gradient-to-r from-[#D4AF37] via-[#f5d76e] to-[#D4AF37]
                  shadow-[0_0_40px_rgba(212,175,55,0.6)]
                "
              >
                Accept the Outcome
              </button>
            </nav>
          </div>
        )}
      </header>


      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default Navbar;
