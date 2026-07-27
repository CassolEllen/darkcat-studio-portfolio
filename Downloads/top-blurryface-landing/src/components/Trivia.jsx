import { motion } from "framer-motion";
import { trivia } from "../data/trivia";

export default function Trivia() {
  return (
    <section id="curiosidades" className="py-32 px-6 max-w-5xl mx-auto scroll-mt-20">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        curiosidades
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-14">CACOS DE LORE</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {trivia.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.07 }}
            className="bg-concrete/30 border border-concrete p-6 rounded-sm"
          >
            <p className="font-hand text-marker text-xl mb-2 -rotate-1">{item.title}</p>
            <p className="font-mono text-sm leading-relaxed text-chalk/75">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
