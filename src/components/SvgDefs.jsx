export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        {/* Chrome gradient */}
        <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#aaaaaa" />
          <stop offset="55%" stopColor="#444444" />
          <stop offset="80%" stopColor="#cccccc" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>

        {/* Chrome gradient 2 - horizontal */}
        <linearGradient id="chromeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dddddd" />
          <stop offset="40%" stopColor="#777777" />
          <stop offset="100%" stopColor="#eeeeee" />
        </linearGradient>

        {/* Pink glow gradient */}
        <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2d78" />
          <stop offset="100%" stopColor="#c4195a" />
        </linearGradient>

        {/* Sketch/hand-drawn filter */}
        <filter id="sketch" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5"
            xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Glow filter pink */}
        <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodColor="#ff2d78" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Halftone dots pattern */}
        <pattern id="halftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.3" fill="#f0ece8" opacity="0.5" />
        </pattern>

        {/* Star clip path for halftone */}
        <clipPath id="starClip5">
          <polygon points="100,8 122,72 190,72 136,112 158,176 100,136 42,176 64,112 10,72 78,72" />
        </clipPath>
      </defs>
    </svg>
  )
}
