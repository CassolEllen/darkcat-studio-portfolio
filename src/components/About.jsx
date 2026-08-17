import { motion } from 'framer-motion'
import Sparkle from './Sparkle'
import { Chain, HalftoneStar } from './ChromeElements'

const skills = [
  { label: 'Figma', size: 16 }, { label: 'React', size: 14 },
  { label: 'Tailwind', size: 15 }, { label: 'Design System', size: 12 },
  { label: 'UI Design', size: 16 }, { label: 'Prototyping', size: 13 }, { label: 'CSS / SCSS', size: 15 },
  { label: 'Accessibility', size: 12 }, { label: 'App Design', size: 14 },
  { label: 'Landing Pages', size: 16 },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)', borderTop: '1px solid #1c1c1c' }}>

      <Chain height={280} color="#888888" opacity={0.2} style={{ right: 20, top: '5%' }} delay={0} />
      <HalftoneStar size={180} opacity={0.08} style={{ right: '15%', top: '20%' }} delay={1} />
      <Sparkle type="four" color="#ff2d78" size={16} top="12%" left="60%" delay={0.5} duration={2.5} glow />
      <Sparkle type="six" color="#aaaaaa" size={22} bottom="20%" right="30%" delay={1.8} duration={4} />
      <Sparkle type="shooting" color="#ffffff" size={60} top="5%" right="35%" rotate={-30} delay={2} duration={6} style={{ opacity: 0.25 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>

        <span style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 10, fontWeight: 300, color: '#ff2d78',
          letterSpacing: '4px', display: 'block', marginBottom: 40, textTransform: 'uppercase',
        }}>// 02</span>

        {/* top grid — foto + bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(24px, 5vw, 60px)',
          marginBottom: 60,
          alignItems: 'start',
        }}>

          {/* foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', maxWidth: 280 }}
          >
            <img
              src="/ellen.png"
              alt="Ellen — DarkCat Studio"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'contrast(1.05) saturate(0.9)',
              }}
            />
            <div style={{
              position: 'absolute', top: 10, left: 10,
              right: -10, bottom: -10,
              border: '1px solid #ff2d78',
              zIndex: -1, opacity: 0.4,
            }} />
            <motion.div
              style={{ position: 'absolute', top: -16, right: -16 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                <path d="M30,2 L34,26 L58,30 L34,34 L30,58 L26,34 L2,30 L26,26Z" fill="#ff2d78" />
              </svg>
            </motion.div>
          </motion.div>

          {/* bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ position: 'relative', marginBottom: 32 }}>
              <span style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(48px, 8vw, 100px)',
                color: 'transparent', WebkitTextStroke: '1px #1a1a1a',
                lineHeight: 1, display: 'block', userSelect: 'none',
              }}>SOBRE</span>
              <h2 style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(32px, 5vw, 52px)',
                color: '#f0ece8',
                position: 'absolute', bottom: -8, left: 0,
              }}>SOBRE</h2>
            </div>

            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: 1.8, color: '#ff2d78',
              marginBottom: 16, fontWeight: 300,
            }}>
              Sou designer e dev de Chapecó/SC — trabalho no cruzamento entre estética e código desde que entrei na área de TI, mas o design sempre foi onde meu cérebro realmente liga.
            </p>

            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: 1.8, color: '#ff2d78',
              marginBottom: 16, fontWeight: 300,
            }}>
              Especialista em landing pages que não deixam ninguém indiferente. Se a página não faz a pessoa parar de rolar, não tá pronta.
            </p>

            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: 1.8, color: '#706d6d',
              marginBottom: 32, fontWeight: 300, fontStyle: 'italic',
            }}>
              Design sem código é teoria. Código sem design é ferramenta.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                padding: '20px 24px',
                border: '1px solid #1e1e1e',
                transform: 'rotate(-1.5deg)',
                display: 'inline-block',
                maxWidth: '100%',
              }}
            >
              <p style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(16px, 3vw, 22px)',
                color: '#f0ece8', lineHeight: 1.3, marginBottom: 8,
              }}>
                "can you save, can you save my—<br />my heavydirtysoul?" ✦
              </p>
              <p style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 10, color: '#727272', letterSpacing: '2px',
                fontStyle: 'italic',
              }}>
                — twenty one pilots
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* skills */}
        <div style={{ borderTop: '1px solid #1c1c1c', paddingTop: 40 }}>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 700, letterSpacing: '4px',
            color: '#727272', textTransform: 'uppercase', marginBottom: 28,
          }}>
            Stack & Skills
          </p>

          <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill.label}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: 'clamp(11px, 2vw, 16px)',
                  fontWeight: i % 3 === 0 ? 700 : 300,
                  color: i % 4 === 0 ? '#ff2d78' : i % 4 === 1 ? '#aaaaaa' : i % 4 === 2 ? '#f0ece8' : '#444',
                  letterSpacing: '1px', padding: '4px 0',
                  cursor: 'default',
                }}
              >
                {skill.label}
                {i < skills.length - 1 && <span style={{ color: '#1e1e1e', marginLeft: 10 }}>·</span>}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}