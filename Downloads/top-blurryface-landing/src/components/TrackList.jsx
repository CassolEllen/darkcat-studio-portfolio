import { motion } from "framer-motion";

const tracks = [
  "Heavydirtysoul", "Stressed Out", "Ride", "Fairly Local", "Tear in My Heart",
  "Lane Boy", "The Judge", "Doubt", "Polarize", "We Don't Believe What's on TV",
  "Message Man", "Hometown", "Not Today", "Goner",
];

export default function TrackList() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        liner notes
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-14">FAIXAS · BLURRYFACE</h2>

      <ol className="divide-y divide-concrete">
        {tracks.map((title, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 7) * 0.04 }}
            className="group flex items-baseline gap-4 sm:gap-8 py-4 cursor-default"
          >
            <span className="font-mono text-xs text-chalk/40 w-6 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-lg sm:text-2xl tracking-wide group-hover:text-marker transition-colors">
              {title}
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
