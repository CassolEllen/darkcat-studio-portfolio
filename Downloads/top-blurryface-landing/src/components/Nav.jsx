import { motion } from "framer-motion";

const links = [
  { href: "#discografia", label: "discografia" },
  { href: "#historia", label: "história" },
  { href: "#turnes", label: "turnês" },
  { href: "#ao-vivo", label: "ao vivo" },
  { href: "#curiosidades", label: "curiosidades" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-ink/70 border-b border-concrete"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-display text-sm tracking-widest text-chalk/80 hover:text-marker transition-colors">
          TOP · BLURRYFACE
        </a>
        <ul className="flex gap-5 sm:gap-7 font-mono text-[11px] uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-chalk/60 hover:text-marker transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
