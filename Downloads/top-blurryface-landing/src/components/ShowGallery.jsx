import { motion } from "framer-motion";

const photos = [
  {
    src: "/show/20250122_203609_web.jpg",
    caption: "Abertura do show — luzes e a marca da banda ao fundo.",
  },
  {
    src: "/show/20250122_213721_web.jpg",
    caption: "Silhueta no palco, feixe de luz cortando a fumaça.",
  },
  {
    src: "/show/20250122_223351_web.jpg",
    caption: "Telão anunciando a turnê, já perto do fim da noite.",
  },
];

export default function ShowGallery() {
  return (
    <section id="ao-vivo" className="py-32 px-6 max-w-5xl mx-auto scroll-mt-20 border-y border-concrete">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        registro pessoal
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-2">AO VIVO</h2>
      <p className="font-mono text-sm text-chalk/50 mb-3">
        The Clancy World Tour · Curitiba · 22 de janeiro de 2025
      </p>
      <p className="font-mono text-xs text-chalk/40 mb-14 max-w-xl">
        fotos próprias, tiradas na plateia — sem tratamento de IA, só ajuste
        de cor e nitidez.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-concrete rounded-sm overflow-hidden bg-concrete/20"
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="w-full h-auto block"
            />
            <figcaption className="font-mono text-xs text-chalk/60 p-3 leading-relaxed">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
