import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Work', 'About', 'Process', 'Contact']

export default function Nav() {
  const [active, setActive] = useState('Work')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(8,8,8,0.9)' : '#080808',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #1c1c1c',
      display: 'flex', transition: 'background 0.3s',
    }}>
      {links.map((link) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => setActive(link)}
          style={{
            display: 'block',
            padding: '14px 24px',
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 10, fontWeight: 700, letterSpacing: '3px',
            textTransform: 'uppercase',
            color: active === link ? '#ff2d78' : '#444',
            borderRight: '1px solid #1c1c1c',
            textDecoration: 'none',
            position: 'relative',
            whiteSpace: 'nowrap',
            transition: 'color 0.2s',
          }}
          whileHover={{ color: '#f0ece8' }}
        >
          {link}
          {/* underline slide */}
          {active === link && (
            <motion.div
              layoutId="navUnderline"
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 1, background: '#ff2d78',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </nav>
  )
}
