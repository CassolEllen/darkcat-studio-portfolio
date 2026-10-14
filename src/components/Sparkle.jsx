import { motion } from 'framer-motion'

// 4-point sharp sparkle SVG
function StarFour({ color = '#ff2d78', size = 40, sketch = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50,2 L55,45 L98,50 L55,55 L50,98 L45,55 L2,50 L45,45Z"
        fill={color}
        filter={sketch ? 'url(#sketch)' : undefined}
      />
    </svg>
  )
}

// 6-point asymmetric star
function StarSix({ color = '#aaaaaa', size = 40, sketch = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50,3 L55,30 L70,12 L58,34 L85,28 L63,45 L95,50 L63,57 L82,75 L58,65 L68,90 L50,72 L32,90 L42,65 L18,75 L37,57 L5,50 L37,45 L15,28 L42,34 L30,12 L45,30Z"
        fill={color}
        filter={sketch ? 'url(#sketch)' : undefined}
      />
    </svg>
  )
}

// Shooting star with scratch lines
function StarShooting({ color = '#ffffff', size = 70 }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 120 80" fill="none">
      <path d="M30,40 L34,22 L50,18 L34,14 L30,0 L26,14 L10,18 L26,22Z" fill={color} filter="url(#sketch)" />
      <line x1="45" y1="22" x2="110" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" filter="url(#sketch)" />
      <line x1="45" y1="28" x2="115" y2="18" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.35" filter="url(#sketch)" />
      <line x1="43" y1="34" x2="108" y2="30" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" filter="url(#sketch)" />
    </svg>
  )
}

// Cross/plus sparkle
function StarCross({ color = '#ff2d78', size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path d="M30,2 L33,26 L57,30 L33,34 L30,58 L27,34 L3,30 L27,26Z" fill={color} filter="url(#sketch)" />
    </svg>
  )
}

const VARIANTS = { four: StarFour, six: StarSix, shooting: StarShooting, cross: StarCross }

export default function Sparkle({
  type = 'four',
  color = '#ff2d78',
  size = 40,
  top, left, right, bottom,
  rotate = 0,
  delay = 0,
  duration = 3,
  glow = false,
  sketch = false,
  style = {},
}) {
  const Star = VARIANTS[type] || StarFour

  const glowFilter = glow
    ? `drop-shadow(0 0 8px ${color}cc)`
    : undefined

  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        top, left, right, bottom,
        rotate,
        filter: glowFilter,
        ...style,
      }}
      animate={{
        y: [0, -12, 0],
        rotate: [rotate, rotate + (type === 'shooting' ? 0 : 10), rotate],
        scale: [1, 1.08, 1],
        filter: glow
          ? [
              `drop-shadow(0 0 4px ${color}66)`,
              `drop-shadow(0 0 14px ${color}cc)`,
              `drop-shadow(0 0 4px ${color}66)`,
            ]
          : undefined,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Star color={color} size={size} sketch={sketch} />
    </motion.div>
  )
}
