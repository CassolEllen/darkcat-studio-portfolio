import { motion } from 'framer-motion'

function ProjectCover({ project }) {
  const covers = {
    'TRAVEL TOGETHER': {
      bg: '#F5F0E8',
      accent: '#1B2B4B',
      secondary: '#C4713A',
      tag: 'MOBILE APP',
    },
    'SUSHI ZEN': {
      bg: '#111111',
      accent: '#CC0000',
      secondary: '#ffffff',
      tag: 'LANDING PAGE',
    },
    'INKD': {
      bg: '#0A0A0A',
      accent: '#AAFF00',
      secondary: '#FF2D78',
      tag: 'MOBILE APP',
    },
  }

  const cover = covers[project.title] || {
    bg: '#111111', accent: '#ff2d78', secondary: '#ffffff', tag: project.category,
  }

  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 320,
      background: cover.bg,
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '32px 28px',
    }}>
      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 9, fontWeight: 700, letterSpacing: '4px',
        color: cover.accent, textTransform: 'uppercase',
        opacity: 0.6,
      }}>
        {cover.tag}
      </span>

      <div>
        <h3 style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(48px, 6vw, 80px)',
          lineHeight: 0.9,
          color: cover.accent,
          letterSpacing: '-1px',
          marginBottom: 16,
        }}>
          {project.title}
        </h3>
        <div style={{ width: 40, height: 3, background: cover.accent, opacity: 0.4 }} />
      </div>

      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 11, fontWeight: 300, letterSpacing: '3px',
        color: cover.accent, opacity: 0.4,
      }}>
        {project.year}
      </span>

      <div style={{
        position: 'absolute', width: 200, height: 200,
        borderRadius: '50%', border: `1px solid ${cover.accent}`,
        opacity: 0.08, right: -60, bottom: -60,
      }} />
      <div style={{
        position: 'absolute', width: 120, height: 120,
        borderRadius: '50%', border: `1px solid ${cover.accent}`,
        opacity: 0.12, right: -20, bottom: -20,
      }} />
      <div style={{
        position: 'absolute', width: 12, height: 12,
        borderRadius: '50%', background: cover.secondary,
        top: 32, right: 28,
      }} />
      <motion.svg
        width="24" height="24" viewBox="0 0 60 60" fill="none"
        style={{ position: 'absolute', bottom: 32, right: 28 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M30,2 L34,26 L58,30 L34,34 L30,58 L26,34 L2,30 L26,26Z" fill={cover.accent} opacity="0.4" />
      </motion.svg>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 300,
      borderBottom: '1px solid #1c1c1c',
      background: '#0a0a0a',
      direction: isEven ? 'ltr' : 'rtl',
    }}>
      <motion.div
        style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}
        whileHover="hover"
      >
        <ProjectCover project={project} />

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
    </div>
  )
}