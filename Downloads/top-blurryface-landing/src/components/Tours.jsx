import { motion } from "framer-motion";
import { tours } from "../data/tours";

export default function Tours() {
  return (
    <section id="turnes" className="py-32 px-6 max-w-3xl mx-auto scroll-mt-20 border-y border-concrete">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        estrada
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-14">TURNÊS</h2>

      <ol className="relative border-l border-concrete pl-8 space-y-10">
        {tours.map((tour, i) => (
          <motion.li
            key={tour.name}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-marker" aria-hidden />
            <p className="font-mono text-xs text-marker tracking-widest uppercase mb-1">{tour.year}</p>
            <p className="font-display text-xl sm:text-2xl leading-tight">{tour.name}</p>
            <p className="font-mono text-sm text-chalk/60 mt-1">{tour.note}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
