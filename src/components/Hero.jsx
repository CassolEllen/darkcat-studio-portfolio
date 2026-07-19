import { motion } from 'framer-motion'
import { ChromeStarOutline, ChromeSparkle, HalftoneStar, Chain } from './ChromeElements'
import Sparkle from './Sparkle'

export default function Hero() {
  const pills = ['Design', 'Code', 'Figma', 'React', 'UX Research']

  return (
    <section
      id="home"
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 40px 60px' }}
    >
      {/* ghost background text */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        <span style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(80px, 16vw, 160px)',
          color: 'transparent',
          WebkitTextStroke: '1px #1a1a1a',
          letterSpacing: '8px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          opacity: 0.7,
        }}>
          ✦ DARKCAT ✦
        </span>
      </div>

      {/* chrome stars — large, rotating, bleeding off edges */}
      <ChromeStarOutline size={320} style={{ top: -80, right: -80 }} />
      <ChromeStarOutline size={220} style={{ bottom: -60, left: -60 }} />
      <ChromeStarOutline size={180} style={{ top: '30%', right: -50 }} />

      {/* chains with sparkles */}
      <Chain height={320} color="#888888" opacity={0.22} style={{ left: 60, top: '5%' }} delay={0} />
      <Chain height={260} color="#ff2d78" opacity={0.18} style={{ right: 180, top: '15%' }} delay={1} />
      <Chain height={200} color="#cccccc" opacity={0.15} style={{ left: '40%', bottom: '5%' }} delay={2} />

      {/* halftone stars background */}
      <HalftoneStar size={180} opacity={0.08} style={{ top: '10%', left: '35%' }} delay={0} />
      <HalftoneStar size={120} opacity={0.06} style={{ bottom: '15%', right: '25%' }} delay={3} />

      {/* chrome sparkle top-left */}
      <ChromeSparkle size={60} style={{ top: 60, left: 40, opacity: 0.35 }} delay={0} />

      {/* floating sparkles */}
      <Sparkle type="four" color="#ff2d78" size={18} top="18%" left="42%" delay={0} duration={2.2} glow />
      <Sparkle type="cross" color="#ff2d78" size={12} top="35%" left="55%" delay={0.8} duration={3} glow />
      <Sparkle type="four" color="#cccccc" size={24} top="22%" left="68%" delay={1.4} duration={3.5} />
      <Sparkle type="six" color="#ff2d78" size={14} top="60%" left="48%" delay={0.3} duration={2.8} glow />
      <Sparkle type="cross" color="#ffffff" size={10} top="72%" left="62%" delay={2} duration={4} />
      <Sparkle type="shooting" color="#aaaaaa" size={65} top="12%" left="60%" rotate={-20} delay={1} duration={7} style={{ opacity: 0.3 }} />

      {/* dashed pink circle atmospheric */}
      <motion.div
        style={{
          position: 'absolute', width: 220, height: 220,
          border: '1px dashed rgba(255,45,120,0.1)',
          borderRadius: '50%',
          top: '30%', left: '40%',
          pointerEvents: 'none', zIndex: 0,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 700 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 11, fontWeight: 300, letterSpacing: '5px',
            color: '#ff2d78', textTransform: 'uppercase', marginBottom: 12,
          }}
        >
          // UX · UI · FRONTEND DEV · DarkCat ✦
        </motion.p>

        <div style={{ marginBottom: 8, overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(80px, 14vw, 130px)',
              lineHeight: 0.85, color: '#f0ece8', letterSpacing: '-1px',
            }}
          >
            DARK
          </motion.div>
        </div>

        <div style={{ marginBottom: 8, overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(80px, 14vw, 130px)',
              lineHeight: 0.85, color: '#ff2d78', letterSpacing: '-1px',
            }}
          >
            CAT
          </motion.div>
        </div>

        <div style={{ marginBottom: 28, overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(40px, 7vw, 68px)',
              lineHeight: 0.85, color: 'transparent',
              WebkitTextStroke: '1px #2a2a2a', letterSpacing: '4px',
            }}
          >
            STUDIO
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 4, fontWeight: 300 }}>
            Interfaces que carregam intenção.
          </p>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 4, fontWeight: 300 }}>
            Código que respira atitude.
          </p>
          <p style={{ fontSize: 11, color: '#2a2a2a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 28 }}>
            not your average interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
        >
          {pills.map((pill, i) => (
            <span key={pill} style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 9, fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase', padding: '5px 12px',
              border: `1px solid ${i === 0 ? '#ff2d78' : '#1c1c1c'}`,
              color: i === 0 ? '#ff2d78' : '#444',
            }}>
              {pill}
            </span>
          ))}
        </motion.div>
      </div>

      <div style={{
        position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)',
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 9, fontWeight: 300, letterSpacing: '4px',
        color: '#1e1e1e', textTransform: 'uppercase',
        writingMode: 'vertical-rl', pointerEvents: 'none', zIndex: 2,
      }}>
        darkcatstudio.com.br · 2025
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'repeating-linear-gradient(90deg, #ff2d78 0, #ff2d78 3px, transparent 3px, transparent 10px)',
        opacity: 0.2,
      }} />
    </section>
  )
}