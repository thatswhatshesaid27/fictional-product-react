// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* 🌌 Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* BRAND */}
          <div className="max-w-md">
            <h3 className="font-marvel tracking-widest text-[#D4AF37] text-2xl mb-4">
              GAUNTLET
            </h3>
            <p className="text-gray-400 font-gauntlet leading-relaxed">
              Gauntlet represents Thanos’ belief in inevitable balance, Hulk’s struggle to control power, and Iron Man’s pursuit of intelligent precision — unified into a single system.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-12 font-gauntlet text-sm">
            <div>
              <p className="text-white font-semibold mb-4 tracking-wide">
                Navigate
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#CTA" className="hover:text-white transition">
                    Decision
                  </a>
                </li>
              </ul>
            </div>

        
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10" />

        {/* BOTTOM */}
      
      </div>
    </footer>
  );
};

export default Footer;
