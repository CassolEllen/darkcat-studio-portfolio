export default function Footer() {
  return (
    <footer className="border-t border-concrete px-6 py-14">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <p className="font-mono text-[11px] leading-relaxed text-chalk/40 max-w-xl">
          Projeto conceito de fã, feito para fins de portfólio. Twenty One Pilots,
          nomes de álbuns e faixas pertencem aos seus respectivos detentores de
          direitos — este trabalho não é afiliado, endossado ou produzido pela
          banda ou sua gravadora.
        </p>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="font-display text-xl tracking-wide">DARKCAT STUDIO</span>
          <a
            href="https://darkcatstudio.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-marker hover:text-chalk transition-colors"
          >
            ver portfólio →
          </a>
        </div>
      </div>
    </footer>
  );
}
