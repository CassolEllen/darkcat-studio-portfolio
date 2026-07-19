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
      {/* SVG gradient/filter defs — invisible, just defines reusable SVG resources */}
      <SvgDefs />

      {/* grain texture overlay */}
      <div className="grain" />

      {/* custom cursor */}
      <Cursor />

      {/* page */}
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  )
}
