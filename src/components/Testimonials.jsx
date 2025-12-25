import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tony Stark",
    role: "Genius, Billionaire, Philanthropist(but IRONMAN first)",
    quote:
      "Creator of Jarvis, Iron man and many more but more importantly IRONMAN.",
    accent: "border-red-500",
  },
  {
    name: "Bruce Banner",
    role: "Scientist (and sometimes the Hulk)",
    quote:
      "From being destroyer to professor, I have mastered the art of balance.",
    accent: "border-green-500",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden" id="testimonials">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-purple-600/20 blur-[220px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl text-center mb-6 font-marvel tracking-widest text-[#D4AF37]">
          TRUSTED BY THOSE WHO COMMAND POWER
        </h2>

        <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto font-gauntlet">
          When intelligence and strength agree, balance is inevitable.
        </p>

    
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`
                relative p-12 rounded-[30px]
                bg-[#0f0f0f]
                border-l-4 ${t.accent}
                border border-gray-800
              `}
            >
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                “{t.quote}”
              </p>

              <div>
                <p className="text-white font-semibold text-lg tracking-wide">
                  {t.name}
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
