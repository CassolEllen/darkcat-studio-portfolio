import { motion } from 'framer-motion'

const covers = {
  'TRAVEL TOGETHER': {
    bg: 'linear-gradient(135deg, #EDE5D8 0%, #D4C4B0 100%)',
    accent: '#1B2B4B', secondary: '#C4713A', num: '01',
  },
  'SUSHI ZEN': {
    bg: 'linear-gradient(135deg, #111 0%, #1a0000 100%)',
    accent: '#CC0000', secondary: '#fff', num: '02',
  },
  'INKD': {
    bg: 'linear-gradient(135deg, #050505 0%, #0a1500 100%)',
    accent: '#AAFF00', secondary: '#FF2D78', num: '03',
  },
  'MOKA CAFÉ': {
    bg: 'linear-gradient(135deg, #1a1008 0%, #2a1a0a 100%)',
    accent: '#D4A857', secondary: '#B5652B', num: '04',
  },
  'PULSA FINTECH': {
    bg: 'linear-gradient(135deg, #0d0008 0%, #1a0015 100%)',
    accent: '#FF2D78', secondary: '#fff', num: '05',
  },
}

function ProjectCover({ project }) {
  const cover = covers[project.title] || {
    bg: '#111', accent: '#ff2d78', secondary: '#fff', num: '00',
  }

  const blobs = {
    'TRAVEL TOGETHER': 'polygon(8% 0%, 92% 4%, 100% 30%, 96% 70%, 88% 100%, 12% 96%, 0% 65%, 4% 20%)',
    'SUSHI ZEN':       'polygon(15% 0%, 85% 2%, 100% 20%, 98% 75%, 80% 100%, 20% 98%, 0% 78%, 2% 18%)',
    'INKD':            'polygon(5% 8%, 88% 0%, 100% 25%, 95% 80%, 75% 100%, 10% 95%, 0% 60%, 8% 15%)',
    'MOKA CAFÉ':       'polygon(12% 2%, 90% 0%, 100% 35%, 92% 85%, 85% 100%, 15% 98%, 0% 70%, 5% 22%)',
    'PULSA FINTECH':   'polygon(0% 15%, 85% 0%, 100% 18%, 98% 72%, 90% 100%, 8% 95%, 0% 78%, 2% 30%)',
  }

  const blobShape = blobs[project.title] || blobs['TRAVEL TOGETHER']

  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 340,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#080808',
    }}>
      <motion.div
        style={{
          width: '85%', height: '85%',
          background: cover.bg,
          clipPath: blobShape,
          position: 'relative', overflow: 'hidden',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <span style={{
          position: 'absolute',
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 180, color: 'transparent',
          WebkitTextStroke: `2px ${cover.accent}`,
          opacity: 0.1, lineHeight: 0.8,
          right: -10, bottom: -20,
          userSelect: 'none', letterSpacing: '-4px',
        }}>{cover.num}</span>

        <div style={{
          position: 'absolute', width: '140%', height: '1px',
          background: `linear-gradient(to right, transparent, ${cover.accent}, transparent)`,
          opacity: 0.25, top: '60%', left: '-20%',
          transform: 'rotate(-8deg)',
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: '28px 32px',
        }}>
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 9, fontWeight: 700, letterSpacing: '4px',
            color: cover.accent, textTransform: 'uppercase', opacity: 0.8,
          }}>{project.category}</span>

          <div>
            <span style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 9, fontWeight: 300, letterSpacing: '4px',
              color: cover.accent, opacity: 0.4,
              textTransform: 'uppercase', display: 'block', marginBottom: 6,
            }}>{project.year}</span>
            <h3 style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 0.88, color: cover.accent, letterSpacing: '-1px',
            }}>{project.title}</h3>
            <div style={{ width: 32, height: 2, background: cover.secondary, opacity: 0.5, marginTop: 10 }} />
          </div>
        </div>
      </motion.div>

      <motion.svg
        width="20" height="20" viewBox="0 0 60 60" fill="none"
        style={{ position: 'absolute', top: 20, right: 20 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M30,2 L34,26 L58,30 L34,34 L30,58 L26,34 L2,30 L26,26Z" fill={cover.accent} opacity="0.5" />
      </motion.svg>

      <span style={{
        position: 'absolute', bottom: 20, left: 20,
        background: '#ff2d78', color: '#fff',
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 8, fontWeight: 700, letterSpacing: '3px',
        textTransform: 'uppercase', padding: '4px 10px',
      }}>{project.category}</span>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      minHeight: 320, borderBottom: '1px solid #1c1c1c',
      background: '#080808', direction: isEven ? 'ltr' : 'rtl',
    }}>
      <div style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}>
        <ProjectCover project={project} />
      </div>

      <div style={{
        padding: '36px 32px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        borderLeft: isEven ? '1px solid #1c1c1c' : 'none',
        borderRight: isEven ? 'none' : '1px solid #1c1c1c',
        direction: 'ltr', background: '#080808',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
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
            fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 0.9,
            color: '#f0ece8', marginBottom: 18, letterSpacing: '0.5px',
          }}>
            {project.title}
          </h2>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 13, lineHeight: 1.7, color: '#484848', marginBottom: 32,
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
                fontFamily: '"Space Grotesk", sans-serif', fontSize: 9, fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e01a60'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff2d78'}
            >✦ VER NO BEHANCE</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px 16px', background: '#ff2d78', color: '#fff',
                fontFamily: '"Space Grotesk", sans-serif', fontSize: 9, fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e01a60'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff2d78'}
            >✦ {project.liveLabel || 'VER PROJETO'}</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '9px 12px', background: 'transparent', color: '#555',
                border: '1px solid #1c1c1c', fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 9, fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#f0ece8' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c1c'; e.currentTarget.style.color = '#555' }}
            >{'</>'} GITHUB</a>
          )}
        </div>
      </div>
    </div>
  )
}