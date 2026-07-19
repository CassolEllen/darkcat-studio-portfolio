import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [clicked, setClicked] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const down = () => setClicked(true)
    const up = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: springX,
        top: springY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* paw cursor */}
      <motion.svg
        width="22" height="22" viewBox="0 0 60 60" fill="none"
        animate={{ scale: clicked ? 1.8 : 1 }}
        transition={{ duration: 0.15 }}
      >
        {/* palm */}
        <ellipse cx="30" cy="38" rx="13" ry="11" fill="#ff2d78" />
        {/* toe beans */}
        <ellipse cx="16" cy="26" rx="5.5" ry="4.5" fill="#ff2d78" />
        <ellipse cx="26" cy="20" rx="5" ry="4.5" fill="#ff2d78" />
        <ellipse cx="37" cy="20" rx="5" ry="4.5" fill="#ff2d78" />
        <ellipse cx="46" cy="26" rx="5.5" ry="4.5" fill="#ff2d78" />
      </motion.svg>

      {/* click flash */}
      {clicked && (
        <motion.div
          style={{ position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg width="24" height="24" viewBox="0 0 60 60" fill="none">
            <path d="M30,2 L34,26 L58,30 L34,34 L30,58 L26,34 L2,30 L26,26Z" fill="#ff2d78" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  )
}
