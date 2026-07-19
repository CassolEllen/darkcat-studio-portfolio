import { motion } from 'framer-motion'

const CatFaceSVG = () => (
  <svg width="64" height="64" viewBox="0 0 100 100" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    {/* ears */}
    <polygon points="18,12 8,40 32,35" fill="#1a1a1a" />
    <polygon points="82,12 92,40 68,35" fill="#1a1a1a" />
    <polygon points="20,16 12,36 30,32" fill="#2d2d2d" />
    <polygon points="80,16 88,36 70,32" fill="#2d2d2d" />
    {/* head */}
    <ellipse cx="50" cy="60" rx="38" ry="35" fill="#1a1a1a" />
    {/* eyes */}
    <ellipse cx="34" cy="52" rx="8" ry="9" fill="#080808" />
    <ellipse cx="66" cy="52" rx="8" ry="9" fill="#080808" />
    {/* pupils */}
    <ellipse cx="35" cy="53" rx="4" ry="6" fill="#ff2d78" />
    <ellipse cx="67" cy="53" rx="4" ry="6" fill="#ff2d78" />
    {/* eye shine */}
    <circle cx="37" cy="50" r="2" fill="#fff" opacity="0.8" />
    <circle cx="69" cy="50" r="2" fill="#fff" opacity="0.8" />
    {/* nose */}
    <polygon points="50,64 46,70 54,70" fill="#ff2d78" />
    {/* mouth */}
    <path d="M44,72 Q50,78 56,72" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* whiskers */}
    <line x1="8" y1="65" x2="38" y2="68" stroke="#333" strokeWidth="1" />
    <line x1="8" y1="70" x2="38" y2="71" stroke="#333" strokeWidth="1" />
    <line x1="62" y1="68" x2="92" y2="65" stroke="#333" strokeWidth="1" />
    <line x1="62" y1="71" x2="92" y2="70" stroke="#333" strokeWidth="1" />
    {/* star mark */}
    <path d="M26,45 L28,38 L30,45 L37,43 L32,48 L34,55 L28,51 L22,55 L24,48 L19,43Z" fill="#ff2d78" opacity="0.7" />
  </svg>
)

const marqueeText = '✦ DARKCAT STUDIO · 2025 // SELECTED WORK · '

export default function MarqueeDivider() {
  const repeat = Array(10).fill(marqueeText).join('')

  return (
    <div style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1c1c1c',
      borderBottom: '1px solid #1c1c1c',
      height: 80,
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
          <CatFaceSVG />
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
