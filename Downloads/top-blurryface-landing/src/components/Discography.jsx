import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { albums } from "../data/discography";

function AlbumCard({ album, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.06 }}
      className="border border-concrete rounded-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-concrete/40 transition-colors"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: album.accent }}
            aria-hidden
          />
          <div className="min-w-0">
            <p className="font-display text-xl sm:text-2xl truncate">{album.title}</p>
            <p className="font-mono text-[11px] text-chalk/50 uppercase tracking-wider truncate">
              {album.year} · {album.tag}
            </p>
          </div>
        </div>
        <span className="font-mono text-marker text-lg shrink-0">{open ? "–" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ol className="px-5 pb-5 pt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1">
              {album.tracks.map((t, i) => (
                <li key={t} className="font-mono text-sm text-chalk/70 flex gap-3">
                  <span className="text-chalk/30 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Discography() {
  return (
    <section id="discografia" className="py-32 px-6 max-w-4xl mx-auto scroll-mt-20">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-marker text-xs tracking-[0.3em] uppercase"
      >
        discografia completa
      </motion.span>
      <h2 className="font-display text-4xl sm:text-6xl mt-4 mb-4">8 ÁLBUNS, 1 HISTÓRIA</h2>
      <p className="font-mono text-sm text-chalk/50 mb-12">toque em cada álbum pra ver as faixas</p>

      <div className="flex flex-col gap-4">
        {albums.map((album, i) => (
          <AlbumCard key={album.title} album={album} index={i} />
        ))}
      </div>
    </section>
  );
}
