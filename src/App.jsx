import { motion } from 'framer-motion'
import SvgDefs from './components/SvgDefs'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background: '#080808', minHeight: '100vh', position: 'relative' }}
    >
      <SvgDefs />
      <div className="grain" />
      <Cursor />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <Nav />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  )
}