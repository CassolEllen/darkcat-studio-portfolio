import { motion } from 'framer-motion'

// apaga o componente CatFaceSVG inteiro e substitui por:
const CatStencil = () => (
  <img
    src="/cat-stencil.png"
    alt="DarkCat"
    style={{
      width: 64,
      height: 64,
      objectFit: 'contain',
      mixBlendMode: 'screen',
      filter: 'contrast(1.8) brightness(1.2) grayscale(1) invert(1)',
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  />
)
const marqueeText = '✦ DARKCAT STUDIO · 2025 // SELECTED WORK · '

export default function MarqueeDivider() {
  const repeat = Array(10).fill(marqueeText).join('')

  return (
    <div style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1c1c1c',
      borderBottom: '1px solid #1c1c1c',
      height: 104,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* left marquee */}
      <motion.div
        style={{
          display: 'flex', alignItems: 'center', gap: 16,
          position: 'absolute', left: 0,
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 10, fontWeight: 700, letterSpacing: '3px',
          color: '#333', textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}
        animate={{ x: [0, '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <span>{repeat}</span>
        <span>{repeat}</span>
      </motion.div>

      {/* center cat */}
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, background: '#0a0a0a', padding: '0 16px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {/* paw left */}
        <motion.span
          style={{ color: '#ff2d78', fontSize: 16 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >🐾</motion.span>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CatStencil />
        </motion.div>

        {/* sparkle right */}
        <motion.span
          style={{ color: '#ff2d78', fontSize: 16, fontFamily: 'sans-serif' }}
          animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >✦</motion.span>
      </div>
    </div>
  )
}
