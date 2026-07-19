import { motion } from 'framer-motion'

// Chrome outline rotating star (hero top-right)
export function ChromeStarOutline({ size = 280, style = {} }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <path
          d="M100,5 L122,75 L195,75 L138,118 L160,188 L100,145 L40,188 L62,118 L5,75 L78,75Z"
          fill="none"
          stroke="url(#chromeGrad)"
          strokeWidth="6"
        />
        <path
          d="M100,30 L116,78 L166,78 L126,106 L142,154 L100,126 L58,154 L74,106 L34,78 L84,78Z"
          fill="none"
          stroke="url(#chromeGrad)"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    </motion.div>
  )
}

// Tribal flame shape
export function TribalFlame({ size = 180, color = '#ffffff', opacity = 0.1, rotate = 0, style = {}, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
        opacity,
        mixBlendMode: 'screen',
        ...style,
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [rotate, rotate + 3, rotate],
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width={size} height={size * 1.6} viewBox="0 0 200 340" fill={color}>
        <path d="M120,10 C160,20 185,55 175,90 C168,115 145,118 155,145 C168,178 180,195 162,225 C148,248 118,252 108,278 C96,308 112,335 95,340 C80,344 58,328 52,305 C42,275 62,252 68,228 C76,200 58,182 68,155 C80,125 62,102 72,72 C84,38 95,5 120,10Z" />
        <ellipse cx="108" cy="95" rx="16" ry="22" fill="transparent" />
        <ellipse cx="92" cy="155" rx="13" ry="18" fill="transparent" />
        <ellipse cx="112" cy="160" rx="9" ry="13" fill="transparent" />
      </svg>
    </motion.div>
  )
}

// Chrome 4-point big sparkle
export function ChromeSparkle({ size = 80, style = {}, delay = 0, spin = false }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
      animate={spin
        ? { rotate: [0, 360] }
        : { scale: [1, 1.15, 1], opacity: [style.opacity || 0.5, (style.opacity || 0.5) * 1.6, style.opacity || 0.5] }
      }
      transition={{ duration: spin ? 20 : 2.5, delay, repeat: Infinity, ease: spin ? 'linear' : 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <path
          d="M100,5 L116,84 L195,100 L116,116 L100,195 L84,116 L5,100 L84,84Z"
          fill="url(#chromeGrad)"
        />
        <path
          d="M100,45 L109,90 L154,100 L109,110 L100,155 L91,110 L46,100 L91,90Z"
          fill="#080808"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  )
}

// Chain with sparkles
export function Chain({ height = 300, color = '#888888', opacity = 0.22, style = {}, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
        opacity,
        ...style,
      }}
      animate={{
        rotate: [-2, 2, -2],
        x: [0, 4, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width={height * 0.4} height={height} viewBox="0 0 120 400" fill="none">
        {/* top sparkle */}
        <path d="M60,8 L63,28 L83,30 L63,32 L60,52 L57,32 L37,30 L57,28Z" fill={color} opacity="0.7" />
        {/* ribbon A */}
        <path d="M60,52 C82,72 92,98 72,120 C52,142 42,162 62,184 C82,206 90,228 70,252 C52,272 44,298 64,320"
          stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* ribbon B */}
        <path d="M60,52 C38,74 30,100 50,122 C70,144 78,164 58,186 C38,208 32,232 52,256 C68,276 70,300 64,320"
          stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
        {/* middle sparkle */}
        <path d="M60,178 L63,192 L77,194 L63,196 L60,210 L57,196 L43,194 L57,192Z" fill={color} opacity="0.55" />
        {/* bottom sparkle */}
        <path d="M63,308 L65,320 L77,322 L65,324 L63,336 L61,324 L49,322 L61,320Z" fill={color} opacity="0.4" />
        {/* scratch lines */}
        <line x1="22" y1="30" x2="42" y2="28" stroke={color} strokeWidth="0.8" opacity="0.3" />
        <line x1="80" y1="192" x2="100" y2="187" stroke={color} strokeWidth="0.8" opacity="0.3" />
      </svg>
    </motion.div>
  )
}

// Halftone star
export function HalftoneStar({ size = 160, opacity = 0.1, style = {}, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        ...style,
      }}
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200">
        <defs>
          <pattern id={`dots-${delay}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.3" fill="#f0ece8" opacity="0.6" />
          </pattern>
          <clipPath id={`starclip-${delay}`}>
            <polygon points="100,8 122,72 190,72 136,112 158,176 100,136 42,176 64,112 10,72 78,72" />
          </clipPath>
        </defs>
        <rect width="200" height="200" fill={`url(#dots-${delay})`} clipPath={`url(#starclip-${delay})`} />
      </svg>
    </motion.div>
  )
}
