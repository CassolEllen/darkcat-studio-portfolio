import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="historia" className="py-32 px-6 max-w-3xl mx-auto scroll-mt-20">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        a história
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-10">DE COLUMBUS PRA CÁ</h2>

      <div className="space-y-6 font-mono text-sm sm:text-base leading-relaxed text-chalk/80">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Tudo começou em 2009, em Columbus, Ohio, quando Tyler Joseph formou um
          trio com o baixista Nick Thomas e o baterista Chris Salih. O nome da
          banda veio de uma peça de teatro universitária sobre um piloto que
          salta de um avião pra fugir da culpa de um erro que custou vidas —
          uma metáfora que já dizia muito sobre o tom das letras que viriam.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Em 2011, Thomas e Salih deixaram o grupo para seguir outros
          caminhos. Josh Dun, que já circulava pela cena local como baterista,
          entrou no lugar — e desde então a twenty one pilots é essa dupla.
          Em 2012 assinaram com a Fueled by Ramen, e no ano seguinte
          lançaram Vessel, seu primeiro álbum em gravadora major.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          O estouro veio em 2015 com Blurryface: "Stressed Out" e "Ride"
          viraram hits globais, e o álbum foi o ponto de partida de uma
          mitologia que a dupla construiria ao longo da década seguinte,
          em torno da cidade fictícia de Dema. Essa história atravessou
          Trench (2018), Scaled and Icy (2021) e Clancy (2024), até se
          encerrar oficialmente em Breach, lançado em 2025.
        </motion.p>
      </div>
    </section>
  );
}
