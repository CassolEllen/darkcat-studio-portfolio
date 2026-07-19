import { motion } from 'framer-motion'
import Sparkle from './Sparkle'
import { Chain, HalftoneStar } from './ChromeElements'

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '80px 40px 60px', borderTop: '1px solid #1c1c1c' }}>

      {/* decorative */}
      <Chain height={240} color="#ff2d78" opacity={0.18} style={{ right: 40, top: 20 }} delay={1.5} />
      <HalftoneStar size={220} opacity={0.07} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} delay={0} />

      <Sparkle type="four" color="#ff2d78" size={20} top="15%" left="5%" delay={0.3} duration={2.2} glow />
      <Sparkle type="six" color="#ff2d78" size={16} top="70%" left="80%" delay={1.2} duration={3.5} glow />
      <Sparkle type="cross" color="#aaaaaa" size={12} top="30%" right="15%" delay={2} duration={3} />
      <Sparkle type="shooting" color="#ffffff" size={55} top="60%" left="10%" rotate={20} delay={0.8} duration={5} style={{ opacity: 0.2 }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 300, color: '#ff2d78',
            letterSpacing: '5px', display: 'block', marginBottom: 24, textTransform: 'uppercase',
          }}
        >// 03 · CONTATO</motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            lineHeight: 0.9, color: '#ff2d78',
            marginBottom: 20,
          }}
        >
          VAMOS FAZER<br />BARULHO JUNTOS?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 12, color: '#444', letterSpacing: '2px',
            textTransform: 'uppercase', marginBottom: 40, fontWeight: 300,
          }}
        >
          drop a message. let's build something that hits hard.
        </motion.p>

        {/* email */}
        <motion.a
          href="mailto:contato@darkcatstudio.com.br"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'inline-block',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(20px, 3vw, 32px)',
            color: '#f0ece8', textDecoration: 'none',
            borderBottom: '1px solid #ff2d78',
            paddingBottom: 4, marginBottom: 48,
            letterSpacing: '2px',
            transition: 'color 0.2s',
          }}
          whileHover={{ color: '#ff2d78' }}
        >
          {/* ── EDITE SEU EMAIL AQUI ── */}
          contato@darkcatstudio.com.br
        </motion.a>

        {/* social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {[
            { label: 'BEHANCE', href: 'https://behance.net/' },
            { label: 'GITHUB', href: 'https://github.com/' },
            { label: 'LINKEDIN', href: 'https://linkedin.com/in/' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 10, fontWeight: 700, letterSpacing: '3px',
                textTransform: 'uppercase', padding: '10px 20px',
                border: '1px solid #1c1c1c', color: '#555',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff2d78'; e.currentTarget.style.color = '#ff2d78' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c1c'; e.currentTarget.style.color = '#555' }}
            >
              {social.label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
