import { motion } from 'framer-motion'
import Sparkle from './Sparkle'
import { Chain, HalftoneStar } from './ChromeElements'

const skills = [
  { label: 'Figma', size: 16 }, { label: 'React', size: 14 }, { label: 'UX Research', size: 13 },
  { label: 'Tailwind', size: 15 }, { label: 'Design System', size: 12 }, { label: 'Framer Motion', size: 14 },
  { label: 'UI Design', size: 16 }, { label: 'Prototyping', size: 13 }, { label: 'CSS / SCSS', size: 15 },
  { label: 'Accessibility', size: 12 }, { label: 'Branding', size: 14 }, { label: 'Next.js', size: 13 },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: '80px 40px', borderTop: '1px solid #1c1c1c' }}>

      {/* decorative */}
      <Chain height={280} color="#888888" opacity={0.2} style={{ right: 20, top: '5%' }} delay={0} />
      <HalftoneStar size={180} opacity={0.08} style={{ right: '15%', top: '20%' }} delay={1} />

      <Sparkle type="four" color="#ff2d78" size={16} top="12%" left="60%" delay={0.5} duration={2.5} glow />
      <Sparkle type="six" color="#aaaaaa" size={22} bottom="20%" right="30%" delay={1.8} duration={4} />
      <Sparkle type="shooting" color="#ffffff" size={60} top="5%" right="35%" rotate={-30} delay={2} duration={6} style={{ opacity: 0.25 }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>

        {/* left col — ghost text + bio */}
        <div>
          {/* section label */}
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 300, color: '#ff2d78',
            letterSpacing: '4px', display: 'block', marginBottom: 4,
          }}>// 02</span>

          {/* ghost big ABOUT */}
          <div style={{ position: 'relative', marginBottom: 32 }}>
            <span style={{
              fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(60px, 8vw, 100px)',
              color: 'transparent', WebkitTextStroke: '1px #1a1a1a',
              lineHeight: 1, display: 'block', userSelect: 'none',
            }}>SOBRE</span>
            <h2 style={{
              fontFamily: '"Bebas Neue", sans-serif', fontSize: 52, color: '#f0ece8',
              position: 'absolute', bottom: -8, left: 0,
            }}>SOBRE</h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 14, lineHeight: 1.8, color: '#555',
              marginBottom: 20, fontWeight: 300,
            }}
          >
            {/* ── EDITE SUA BIO AQUI ── */}
            Sou UX/UI Developer com foco em transformar problemas complexos em interfaces que as pessoas realmente querem usar. Trabalho no cruzamento entre design e código — do wireframe ao componente final.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 14, lineHeight: 1.8, color: '#444',
              fontWeight: 300,
            }}
          >
            Cada projeto que entrego carrega intenção — desde a paleta de cores até a micro-interação mais sutil. Design sem código é teoria. Código sem design é ferramenta.
          </motion.p>

          {/* pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              marginTop: 40, padding: '20px 24px',
              border: '1px solid #1e1e1e',
              transform: 'rotate(-1.5deg)',
            }}
          >
            <p style={{
              fontFamily: '"Bebas Neue", sans-serif', fontSize: 26,
              color: '#f0ece8', lineHeight: 1.2, marginBottom: 8,
            }}>
              "design is my ✦<br />weapon of choice"
            </p>
            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 10, color: '#333', letterSpacing: '2px',
              fontStyle: 'italic',
            }}>
              — DarkCat Studio
            </p>
          </motion.div>
        </div>

        {/* right col — skills tag cloud */}
        <div>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 700, letterSpacing: '4px',
            color: '#333', textTransform: 'uppercase', marginBottom: 28,
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
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: skill.size, fontWeight: i % 3 === 0 ? 700 : 300,
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
