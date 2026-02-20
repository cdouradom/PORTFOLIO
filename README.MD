# Portfólio — Cintia Dourado

**QA Estratégica & Quality Manager** — Governança de Delivery, Estratégia de Testes, E-commerce, Integrações e IA aplicada à Qualidade.

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

---

## Sobre o projeto

Portfólio profissional em **HTML**, **CSS** e **JavaScript** (sem framework), com foco em:

- **Posicionamento:** QA Estratégica, Quality Manager, visão de negócio e governança de delivery.
- **Design:** Paleta terrosa/rosé (neutros creme e bege, acento rosé), tipografia Inter, layout minimalista e responsivo.
- **Conteúdo:** Sobre mim, como penso qualidade (risco, impacto, governança, previsibilidade, valor), experiência, competências estratégicas, projetos, tecnologias e contato.

O site é estático e está pronto para **GitHub Pages** ou **Vercel**.

---

## Funcionalidades

- **Layout responsivo** — Desktop, tablet e mobile (menu adaptável, botões e formulário ajustados).
- **Navegação** — Menu fixo com rolagem suave e âncoras para as seções.
- **Download de currículos** — Botões para download do currículo em PT e do resume em EN (Hero e Sobre mim).
- **Formulário de contato** — Validação em tempo real e página de sucesso após envio (FormSubmit).
- **API do GitHub** — Avatar e estatísticas (seguidores/repositórios) na seção Sobre mim.
- **Seção “Como penso qualidade”** — Pilares: Risco, Impacto, Governança, Previsibilidade, Valor para o negócio.
- **Footer** — Nome, tagline, links para LinkedIn, GitHub e Instagram, e copyright.

---

## Tecnologias

- **HTML5** — Estrutura semântica, acessibilidade (aria-labels, landmarks).
- **CSS3** — Variáveis (`:root`), Flexbox, Grid, media queries (1024px, 768px, 480px).
- **JavaScript (ES6+)** — Validação de formulário, fetch à API do GitHub, âncoras e scroll.

---

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/cdouradom/PORTFOLIO.git
   cd PORTFOLIO
   ```
2. Abra o `index.html` no navegador ou use a extensão **Live Server** no VS Code (clique direito no arquivo → “Open with Live Server”).

Não é necessário instalar dependências nem rodar build — o projeto é HTML/CSS/JS puro.

---

## Deploy

### GitHub Pages

1. No repositório: **Settings → Pages**.
2. **Source:** Deploy from a branch.
3. **Branch:** `main` (ou `gh-pages`), pasta **/ (root)**.
4. Salve. O site ficará em: `https://<seu-usuario>.github.io/PORTFOLIO/`.

### Vercel

1. Acesse [vercel.com](https://vercel.com) e conecte o repositório.
2. Tipo do projeto: **Static**.
3. **Build command:** em branco. **Output directory:** `.` (raiz).
4. Deploy. A Vercel gera a URL e permite domínio customizado.

---

## Estrutura do repositório

```
/
├── index.html          # Página principal
├── success.html        # Página pós-envio do formulário
├── README.MD           # Este arquivo
├── REFATORACAO.md      # Análise e justificativas da refatoração
└── assets/
    ├── css/
    │   └── styles.css  # Estilos (variáveis, componentes, responsivo)
    ├── js/
    │   └── script.js  # Validação, API GitHub, âncoras
    ├── img/           # Favicon, avatar, ícones (tecnologias e redes)
    └── docs/          # Currículos (PT/EN) e documentação (html.md, css.md)
```

---

## Contato

- **LinkedIn:** [linkedin.com/in/cintia-douradom](https://www.linkedin.com/in/cintia-douradom)
- **GitHub:** [github.com/cdouradom](https://github.com/cdouradom)
- **Instagram:** [@ciidourado](https://www.instagram.com/ciidourado)
