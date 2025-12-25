import { motion, AnimatePresence } from "framer-motion";

const FormModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-[#0f0f0f] border border-gray-800 p-10 overflow-hidden"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-20 left-1/3 w-[300px] h-[300px] bg-purple-600/30 blur-[140px]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>

            {/* Header */}
            <h3 className="text-2xl font-marvel tracking-widest text-[#D4AF37] mb-2">
              ACCEPT THE OUTCOME
            </h3>

            <p className="text-gray-400 font-gauntlet mb-8">
              Provide your details. The system will respond.
            </p>

            {/* Form */}
            <form className="space-y-5 font-gauntlet">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37]"
              />

              <textarea
                rows="4"
                placeholder="Your Intent"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="
                  w-full mt-4 px-6 py-4 rounded-xl
                  font-marvel tracking-widest uppercase
                  text-black
                  bg-gradient-to-r from-[#D4AF37] via-[#f5d76e] to-[#D4AF37]
                  hover:scale-105 transition
                "
              >
                Submit Decision
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;
