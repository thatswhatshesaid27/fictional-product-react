import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Power",
    subtitle: "THE POWER STONE",
    desc:
      "The Power Stone grants access to raw, unlimited strength. It amplifies physical abilities and energy to catastrophic levels, capable of destroying entire planets when unleashed without restraint.",
    impact: "Overwhelming force without limitation.",
    stoneColor: "bg-purple-500",
    aura: "shadow-[0_0_120px_rgba(168,85,247,0.35)]",
  },
  {
    title: "Reality",
    subtitle: "THE REALITY STONE",
    desc:
      "The Reality Stone allows its wielder to alter matter, rewrite physical laws, and bend existence itself. What is imagined can be made real, regardless of natural rules or logic.",
    impact: "Reality conforms to will.",
    stoneColor: "bg-red-500",
    aura: "shadow-[0_0_120px_rgba(239,68,68,0.35)]",
  },
  {
    title: "Space",
    subtitle: "THE SPACE STONE",
    desc:
      "The Space Stone governs structure and position across the universe. It enables instant travel, manipulation of distance, and absolute control over spatial dimensions.",
    impact: "All space exists under command.",
    stoneColor: "bg-blue-500",
    aura: "shadow-[0_0_120px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Time",
    subtitle: "THE TIME STONE",
    desc:
      "The Time Stone grants control over the flow of time itself. It allows its wielder to see possible futures, alter timelines, reverse events, and ensure inevitable outcomes.",
    impact: "Time bends, loops, and obeys.",
    stoneColor: "bg-green-500",
    aura: "shadow-[0_0_120px_rgba(34,197,94,0.35)]",
  },
];



const FeatureCard = ({
  title,
  subtitle,
  desc,
  impact,
  stoneColor,
  aura,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left - 14,
      y: e.clientY - rect.top - 14,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative p-12 rounded-[30px]
        bg-[#0f0f0f]
        border border-gray-800
        overflow-hidden
        transition-all duration-300
        min-h-[420px]
        ${hovered ? aura : ""}
      `}
    >
      
      <div
        className={`
          absolute inset-0 opacity-0 transition-opacity duration-300
          ${hovered ? "opacity-10" : ""}
          ${stoneColor}
        `}
      />

    
      {hovered && (
        <motion.div
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`
            pointer-events-none absolute
            w-7 h-7 rounded-full
            ${stoneColor}
            opacity-90
            blur-[1px]
          `}
        />
      )}

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold tracking-wide mb-2 text-white">
          {title}
        </h3>

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
          {subtitle}
        </p>

        <p className="text-gray-300 leading-relaxed mb-10 max-w-[90%]">
          {desc}
        </p>

        <div className="h-px w-16 bg-gray-700 mb-4" />

        <p className="text-sm font-semibold tracking-wide text-white">
          {impact}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
    
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/4 w-[700px] h-[700px] bg-purple-600/20 blur-[220px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl text-center mb-6 font-marvel tracking-widest text-[#D4AF37]">
          POWER IS CONTROLLED
        </h2>

        <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto font-gauntlet">
          Every capability exists to enforce balance, authority, and inevitability.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
