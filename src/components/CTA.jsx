import { motion } from "framer-motion";
import { useState } from "react";
import FormModal from "./FormModal";

const CTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="CTA" className="relative py-32 bg-black overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-purple-600/20 blur-[220px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[200px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6 font-marvel tracking-widest text-[#D4AF37]"
          >
            THE DECISION IS INEVITABLE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto font-gauntlet text-lg"
          >
            Power does not wait. Control does not hesitate.
            When balance is required, Gauntlet responds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <button
              onClick={() => setOpen(true)}
              className="
                relative px-14 py-5 rounded-xl
                font-marvel tracking-widest uppercase
                text-black
                bg-gradient-to-r from-[#D4AF37] via-[#f5d76e] to-[#D4AF37]
                hover:scale-105 active:scale-95 transition
                shadow-[0_0_40px_rgba(212,175,55,0.45)]
              "
            >
              Accept the Outcome
            </button>
          </motion.div>
        </div>
      </section>

    
      <FormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CTA;
