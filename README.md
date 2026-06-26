# Leonardo Bastos - Arcade Developer Portfolio

Portfolio pessoal em React, TypeScript, Vite e Tailwind CSS, com identidade visual inspirada em arcade, pixel art e interfaces retro.

## Sobre o projeto

O site apresenta perfil profissional, skills, projetos, stack tecnica, experiencia e canais de contacto em uma experiencia visual responsiva.

Sections principais:

- `INSERT COIN` - apresentacao inicial
- `PLAYER PROFILE` - perfil profissional
- `SKILLS UNLOCKED` - competencias tecnicas
- `SELECT PROJECT` - projetos desenvolvidos
- `SOURCE CODE` - tecnologias e abordagem
- `GAME PROGRESS` - linha do tempo profissional
- `CONTACT TERMINAL` - contacto e redes profissionais

## Funcionalidades

- Layout responsivo para desktop, tablet e mobile
- Navbar adaptavel conforme a section visivel
- Navegacao suave ate os titulos das sections
- Cards de projeto com links preparados para codigo e projeto publicado
- CTA de download do curriculo no Hero
- Botao flutuante de retorno ao topo com foguete pixel-art
- Componentes reutilizaveis em React
- Animacoes leves com respeito a `prefers-reduced-motion`
- Estados de foco e labels acessiveis em controles interativos

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Estrutura

```txt
src/
  assets/
  components/
    portfolio/
  constants/
  data/
  sections/
  types/
  App.tsx
  main.tsx
  styles.css
```

## Como executar

```bash
npm install
npm run dev
```

O Vite exibira a URL local no terminal, normalmente `http://localhost:5173`.

## Scripts

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run lint
```

Executa a verificacao TypeScript sem emitir arquivos.

```bash
npm run build
```

Gera a versao de producao.

```bash
npm run preview
```

Serve localmente a build de producao.

## Licenca

Projeto desenvolvido para portfolio pessoal de Leonardo Bastos.
