import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import MarqueeDivider from './MarqueeDivider'
import Sparkle from './Sparkle'
import { TribalFlame, HalftoneStar } from './ChromeElements'

// ─── EDIT YOUR PROJECTS HERE ───────────────────────────────────────────────
const projects = [
  {
    title: 'NOME DO PROJETO',
    year: '2024',
    type: 'E-commerce',
    category: 'UI / WEB',
    description: 'Breve descrição do case — fale sobre o problema resolvido, a solução criada e o impacto gerado. Duas a três linhas bastam para despertar curiosidade.',
    image: null, // substitua por: '/images/projeto1.jpg'
    behance: '#',
    live: '#',
    github: '#',
  },
  {
    title: 'NOME DO PROJETO',
    year: '2024',
    type: 'Mobile · UX',
    category: 'APP DESIGN',
    description: 'Breve descrição do case — fale sobre o problema resolvido, a solução criada e o impacto gerado. Duas a três linhas bastam para despertar curiosidade.',
    image: null,
    behance: '#',
    live: '#',
    github: '#',
  },
  {
    title: 'NOME DO PROJETO',
    year: '2023',
    type: 'Identidade Visual',
    category: 'BRANDING',
    description: 'Breve descrição do case — fale sobre o problema resolvido, a solução criada e o impacto gerado. Duas a três linhas bastam para despertar curiosidade.',
    image: null,
    behance: '#',
    live: '#',
    github: '#',
  },
]
// ────────────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="work" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* decorative elements */}
      <TribalFlame size={150} color="#ff2d78" opacity={0.1} rotate={10}
        style={{ right: -30, top: '10%' }} delay={1.2} />
      <HalftoneStar size={140} opacity={0.07} style={{ left: '5%', top: '30%' }} delay={2} />
      <HalftoneStar size={100} opacity={0.06} style={{ right: '8%', bottom: '20%' }} delay={4} />

      <Sparkle type="six" color="#ff2d78" size={14} top="8%" left="88%" delay={0.5} duration={2.8} glow />
      <Sparkle type="cross" color="#aaaaaa" size={10} top="45%" left="3%" delay={1.5} duration={3.5} />
      <Sparkle type="four" color="#ff2d78" size={16} bottom="25%" right="5%" delay={0.8} duration={2.2} glow />

      {/* section header */}
      <div style={{
        padding: '40px 40px 20px',
        display: 'flex', alignItems: 'flex-end', gap: 16,
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 300, color: '#ff2d78',
            letterSpacing: '4px', display: 'block', marginBottom: 4,
          }}>// 01</span>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 52, lineHeight: 1, color: '#f0ece8',
          }}>
            SELECTED<br />WORK
          </h2>
        </motion.div>
        <div style={{ flex: 1, height: 1, background: '#1c1c1c', marginBottom: 10 }} />
      </div>

      {/* dashed rule */}
      <div style={{
        height: 1, margin: '0',
        background: 'repeating-linear-gradient(90deg, #ff2d78 0, #ff2d78 3px, transparent 3px, transparent 10px)',
        opacity: 0.2,
      }} />

      {/* cards */}
      <div style={{ background: '#1c1c1c', display: 'grid', gap: 1 }}>
        {projects.map((project, i) => (
          <div key={i}>
            <ProjectCard project={project} index={i} />
            {i < projects.length - 1 && <MarqueeDivider />}
          </div>
        ))}
      </div>
    </section>
  )
}
