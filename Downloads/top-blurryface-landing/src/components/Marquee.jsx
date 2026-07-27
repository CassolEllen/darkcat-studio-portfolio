import { motion } from "framer-motion";

// Track titles only (titles aren't protected lyric content) plus original,
// non-lyric design copy — no quoted lyrics anywhere on this page.
const words = ["HEAVYDIRTYSOUL", "STRESSED OUT", "FAIRLY LOCAL", "POLARIZE", "GONER", "BLURRYFACE ERA — FAN CONCEPT"];

export default function Marquee() {
  const line = words.join("   ✦   ") + "   ✦   ";

  return (
    <div className="relative py-6 bg-marker overflow-hidden -rotate-1">
      <motion.div
        className="flex whitespace-nowrap font-display text-2xl sm:text-4xl text-ink"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="pr-4">{line}{line}</span>
        <span className="pr-4">{line}{line}</span>
      </motion.div>
    </div>
  );
}
