import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Original, simplified silhouette — five abstracted marker-drawn fingers that
// "count up" against the scroll, echoing the fan-made zine habit of tally
// marks and counted gestures rather than reproducing any official artwork.
export default function HandMotif() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reveal = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div ref={ref} className="relative w-full flex justify-center py-10">
      <svg
        width="260"
        height="220"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_30px_rgba(200,19,36,0.25)]"
      >
        <path
          d="M60 210 C40 160 45 100 60 60 C65 45 85 45 88 62 L92 120"
          stroke="#2b2926"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1={92 + i * 30}
            y1={120 - i * 6}
            x2={92 + i * 30}
            y2={30 - i * 4}
            stroke="#c81324"
            strokeWidth="9"
            strokeLinecap="round"
            style={{
              pathLength: useTransform(reveal, (v) => Math.min(Math.max(v - i, 0), 1)),
            }}
            initial={{ pathLength: 0 }}
          />
        ))}
        <path
          d="M60 210 C110 225 190 220 220 200"
          stroke="#2b2926"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
