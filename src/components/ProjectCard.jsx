import { motion } from 'framer-motion'
import Sparkle from './Sparkle'

function GhostImagePlaceholder({ num, accent }) {
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 300,
      background: '#0d0d0d', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: 120, color: '#f0ece8',
        opacity: 0.04, lineHeight: 1,
        position: 'absolute', bottom: 8, left: 16,
        userSelect: 'none',
      }}>{num}</span>
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.06 }}>
        <rect x="5" y="5" width="90" height="90" rx="2" stroke="#f0ece8" strokeWidth="1" />
        <line x1="5" y1="5" x2="95" y2="95" stroke="#f0ece8" strokeWidth="0.5" />
        <line x1="95" y1="5" x2="5" y2="95" stroke="#f0ece8" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="18" stroke="#f0ece8" strokeWidth="0.5" />
      </svg>
      <div style={{ position: 'absolute', bottom: 48, right: 24 }}>
        <Sparkle type="four" color={accent} size={28} delay={0.2} duration={2.5} glow style={{ position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' }} />
      </div>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 300,
        borderBottom: '1px solid #1c1c1c',
        background: '#0a0a0a',
        direction: isEven ? 'ltr' : 'rtl',
      }}
    >
      {/* image side */}
      <motion.div
        style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}
        whileHover="hover"
      >
        {project.image
          ? (
            <motion.img
              src={project.image}
              alt={project.title}
              style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
                      background: '#0d0d0d',
                    }}
              variants={{ hover: { scale: 1.04, filter: 'contrast(1.1) brightness(1.05)' } }}
              transition={{ duration: 0.4 }}
            />
          )
          : <GhostImagePlaceholder num={String(index + 1).padStart(2, '0')} accent="#ff2d78" />
        }
        <div style={{
          position: 'absolute', inset: 0,
          background: isEven
            ? 'linear-gradient(to right, transparent 60%, #0a0a0a 100%)'
            : 'linear-gradient(to left, transparent 60%, #0a0a0a 100%)',
          pointerEvents: 'none',
        }} />
        <span style={{
          position: 'absolute', bottom: 14,
          left: isEven ? 14 : 'auto', right: isEven ? 'auto' : 14,
          background: '#ff2d78', color: '#fff',
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 8, fontWeight: 700, letterSpacing: '3px',
          textTransform: 'uppercase', padding: '4px 10px', zIndex: 3,
        }}>
          {project.category}
        </span>
        <motion.div
          variants={{ hover: { scaleX: [0, 1, 0], opacity: [0, 0.15, 0] } }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute', inset: 0, background: '#ff2d78',
            pointerEvents: 'none', zIndex: 2, transformOrigin: 'left',
          }}
        />
      </motion.div>

      {/* content side */}
      <div style={{
        padding: '32px 28px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderLeft: isEven ? '1px solid #1c1c1c' : 'none',
        borderRight: isEven ? 'none' : '1px solid #1c1c1c',
        direction: 'ltr', background: '#0a0a0a',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, fontWeight: 300, letterSpacing: '3px', color: '#444', textTransform: 'uppercase' }}>
              {project.year}
            </span>
            <span style={{ width: 3, height: 3, background: '#ff2d78', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '2px', color: '#ff2d78', textTransform: 'uppercase' }}>
              {project.type}
            </span>
          </div>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 0.95,
            color: '#f0ece8', marginBottom: 16, letterSpacing: '0.5px',
          }}>
            {project.title}
          </h2>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 13, lineHeight: 1.7, color: '#484848', marginBottom: 28,
          }}>
            {project.description}
          </p>
        </div>

        {/* buttons — só renderiza se o link existir */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {project.behance && (
            <a href={project.behance} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px 16px', background: '#ff2d78', color: '#fff',
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 9, fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e01a60'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff2d78'}
            >
              ✦ VER NO BEHANCE
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px 16px', background: '#ff2d78', color: '#fff',
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 9, fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e01a60'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff2d78'}
            >
              ✦ {project.liveLabel || 'VER PROJETO'}
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '9px 12px', background: 'transparent', color: '#555',
                border: '1px solid #1c1c1c',
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 9, fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#f0ece8' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c1c'; e.currentTarget.style.color = '#555' }}
            >
              {'</>'} GITHUB
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}