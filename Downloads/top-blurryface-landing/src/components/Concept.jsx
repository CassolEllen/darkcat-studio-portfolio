import { motion } from "framer-motion";

export default function Concept() {
  return (
    <section className="relative py-32 px-6 border-y border-concrete">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
        >
          o conceito
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl mt-4 mb-8 leading-[0.95]"
        >
          UMA REINTERPRETAÇÃO,<br /> NÃO UMA CÓPIA.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm sm:text-base leading-relaxed text-chalk/80"
        >
          Esta página é um exercício de UI/UX autoral inspirado na paleta emocional
          da era Blurryface — vermelho contra preto, grafite de marcador, ruído
          de VHS, o corpo como superfície de ansiedade. Nenhuma logo oficial,
          fotografia da banda ou letra de música foi reproduzida aqui; toda a
          direção de arte, tipografia e ilustração foi construída do zero pela
          DarkCat Studio como peça de portfólio.
        </motion.p>
      </div>
    </section>
  );
}
