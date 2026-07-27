import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* scratchy red backdrop */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-marker/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs sm:text-sm tracking-[0.3em] text-marker uppercase mb-6"
      >
        fan concept — não afiliado à banda
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-[16vw] sm:text-[10vw] leading-[0.85] text-center text-chalk tracking-tight"
      >
        TWENTY<br />
        <span className="text-outline">ONE</span> PILOTS
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="h-[6px] w-40 sm:w-64 bg-marker mt-6 origin-left"
        style={{ clipPath: "polygon(0 20%,10% 0,25% 40%,40% 5%,55% 60%,70% 10%,85% 50%,100% 0,100% 100%,0 100%)" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="font-hand text-2xl sm:text-3xl text-skin mt-8 -rotate-2 text-center"
      >
        era: blurryface
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 font-mono text-[11px] tracking-widest text-chalk/40 uppercase"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
