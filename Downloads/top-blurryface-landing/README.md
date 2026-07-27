# Twenty One Pilots — Blurryface (fan concept landing page)

Projeto de portfólio da **DarkCat Studio**: landing page conceito, inspirada na
identidade visual da era *Blurryface* do Twenty One Pilots. Não é afiliado,
endossado ou produzido pela banda — ver disclaimer no rodapé da própria página.

**Stack:** React + Vite + Tailwind CSS + Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

## Deploy no GitHub Pages (mesmo fluxo do case Travel Together)

1. Crie um repositório novo no GitHub, ex: `top-blurryface-landing`.
2. Se o nome do repositório for diferente, ajuste:
   - `base` em `vite.config.js`
   - `homepage` em `package.json`
   ambos devem apontar para `/<nome-do-repo>/`.
3. Troque `SEU_USUARIO` em `package.json` (`homepage`) pelo seu usuário do GitHub.
4. Suba o código:
   ```bash
   git init
   git add .
   git commit -m "primeiro commit: landing conceito Blurryface"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/top-blurryface-landing.git
   git push -u origin main
   ```
5. Publique com o `gh-pages` (já configurado nos scripts):
   ```bash
   npm run deploy
   ```
   Isso builda o projeto e publica a pasta `dist/` na branch `gh-pages`.
6. No GitHub: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / root**.
7. O site sobe em: `https://SEU_USUARIO.github.io/top-blurryface-landing/`

## Notas de design

- Paleta: preto quase puro (`#0a0908`), vermelho marcador (`#c81324`),
  chalk off-white (`#efe9df`), tom de pele contido (`#c99a72`) só no motivo
  da mão.
- Tipografia: Anton (display, condensada/impactante), JetBrains Mono (corpo,
  clima de liner notes/zine), Permanent Marker (detalhes manuscritos).
- Elemento-assinatura: a mão ilustrada em `HandMotif.jsx` "conta" os dedos
  conforme o scroll — releitura original do gesto de contagem associado à
  era, sem reproduzir a arte oficial do álbum.
- Nenhuma logo oficial, foto da banda ou letra de música foi usada. Toda a
  discografia usa apenas títulos de faixa (não protegidos por direito
  autoral como as letras seriam).

## Seções

- **Hero / Marquee / Conceito** — abertura no clima Blurryface.
- **Discografia** (`Discography.jsx` + `data/discography.js`) — os 8 álbuns
  de estúdio, cada um com card expansível mostrando a tracklist completa.
- **História** (`History.jsx`) — biografia da banda escrita com texto
  próprio, cobrindo formação em 2009, entrada de Josh Dun, e a mitologia
  de Dema que atravessa Blurryface → Trench → Scaled and Icy → Clancy →
  Breach.
- **Turnês** (`Tours.jsx` + `data/tours.js`) — linha do tempo com todas as
  turnês oficiais, de 2011 até 2025.
- **Curiosidades** (`Trivia.jsx` + `data/trivia.js`) — grid de fatos
  verificados (recordes da RIAA, Grammy, origem do nome, etc.), com
  visual de post-its/anotações de zine.

Todos os dados factuais (datas, nomes de álbuns/faixas/turnês) foram
checados via busca antes da implementação. Para adicionar/corrigir algo,
edite diretamente os arquivos em `src/data/`.
