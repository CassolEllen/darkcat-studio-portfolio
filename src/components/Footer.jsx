export default function Footer() {
  return (
    <footer style={{
      padding: '24px 40px',
      borderTop: '1px solid #1c1c1c',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    }}>
      <span style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: 28, color: '#111', letterSpacing: '2px',
      }}>
        DARKCAT STUDIO
      </span>
      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 10, color: '#222', letterSpacing: '2px', textTransform: 'uppercase',
      }}>
        © 2025 · Todos os direitos reservados
      </span>
      <a
        href="https://darkcatstudio.com.br"
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 10, color: '#ff2d78', letterSpacing: '2px',
          textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none',
        }}
      >
        darkcatstudio.com.br ↗
      </a>
    </footer>
  )
}
