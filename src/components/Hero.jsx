import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import FormModal from "./FormModal"; // 👈 import modal

const Hero = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false); // 👈 modal state

  // Scroll-based rotation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  // Parallax hover
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <>
      <section
        ref={ref}
        className="relative pt-32 overflow-hidden bg-black text-white"
        id="hero"
      >
      
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,34,206,0.45)_0%,rgba(76,29,149,0.35)_35%,rgba(0,0,0,0.9)_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(88,28,135,0.35)_50%,rgba(0,0,0,0.95)_100%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl leading-tight font-semibold tracking-widest uppercase text-[#D4AF37]"
            >
              Power Your Product <br /> With Gauntlet
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg max-w-xl text-gray-300 font-light leading-relaxed"
            >
              From Thanos’ inevitability, through Hulk’s raw force,
              to Iron Man’s calculated brilliance — Gauntlet is control
              over power itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex gap-6 items-center"
            >
            
              <button
                onClick={() => setOpen(true)} // 👈 open modal
                className="
                  relative px-12 py-4 rounded-xl
                  font-marvel tracking-widest uppercase
                  text-black
                  bg-gradient-to-r from-[#D4AF37] via-[#f5d76e] to-[#D4AF37]
                  transition-all duration-300
                  hover:scale-105 active:scale-95
                  shadow-[0_0_40px_rgba(212,175,55,0.45)]
                  hover:shadow-[0_0_70px_rgba(212,175,55,0.75)]
                  overflow-hidden
                "
              >
                <span className="absolute inset-0 rounded-xl border border-yellow-300/60 opacity-0 hover:opacity-100 transition" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Accept the Outcome</span>
              </button>

          
              <button
                className="
                  px-8 py-3 rounded-lg
                  border border-gray-600
                  text-gray-300
                  hover:bg-white/10
                  transition
                  font-gauntlet
                "
              >
                See more
              </button>
            </motion.div>
          </div>

        
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center items-center"
          >
            <motion.img
              src="/assets/thanos-removebg-preview.png"
              alt="Gauntlet model"
              style={{ rotate, x: coords.x, y: coords.y }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[1150px] select-none"
              draggable={false}
            />
          </div>
        </div>
      </section>

    
      <FormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
