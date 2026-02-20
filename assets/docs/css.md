# Documentação do CSS — Projeto Portfólio

Referência da estrutura e convenções do `assets/css/styles.css` (portfólio Cintia Dourado).

---

### Visão geral

- **Arquivo:** `assets/css/styles.css`
- **Abordagem:** CSS puro, sem pré-processador. Variáveis em `:root`, layout responsivo com media queries.
- **Paleta:** Terrosa/rosé (neutros creme/bege, acento rosé, texto em tons terrosos).

---

### Variáveis (`:root`)

Todas as cores e medidas principais estão em variáveis para manutenção fácil.

| Grupo | Variáveis | Uso |
|-------|-----------|-----|
| **Primário (texto/escuro)** | `--navy-900` a `--navy-500` | Títulos, parágrafos, texto geral (tons terrosos). |
| **Neutros** | `--gray-100` a `--gray-500`, `--white`, `--black` | Fundos, bordas, divisórias (creme/bege). |
| **Acento** | `--accent`, `--accent-hover`, `--accent-light`, `--accent-soft` | Botões primários, links, barrinhas, destaques (rosé). |
| **Divisórias** | `--divider`, `--divider-accent` | Bordas e linhas. |
| **Feedback** | `--success`, `--error`, `--warning` | Mensagens e estados. |
| **Layout** | `--max-width`, `--header-height`, `--section-padding`, `--radius`, `--shadow`, `--shadow-md` | Largura máxima, altura do header, espaçamento, bordas e sombras. |

---

### Estrutura do arquivo (blocos)

1. **Reset e base** — `*`, `box-sizing`, remoção de outline/underline padrão.
2. **Variáveis** — `:root` com paleta e layout.
3. **Tipografia** — `html` (smooth scroll), `body` (fonte Inter, cor, flex column).
4. **Header** — `.header`, `.header__inner`, `.nav__list`, links.
5. **Seções** — `.section`, `.section__title`, `.section__subtitle`.
6. **Hero** — `.hero`, `.hero__inner`, `.hero__badge`, `.hero__title`, `.hero__subtitle`, `.hero__cta`.
7. **Botões** — `.btn`, `.btn--primary`, `.btn--secondary`.
8. **About** — `.about`, `.about__avatar`, `.about__content`, `.about__stats`, `.stat`.
9. **Quality** — `.quality-grid`, `.quality-card`.
10. **Experience** — `.timeline`, `.timeline__item`, `.timeline__role`, `.timeline__meta`, `.timeline__desc`.
11. **Tags (competências)** — `.tags`, `.tag`, `.tag--highlight`.
12. **Projetos** — `.projects-grid`, `.project-card`.
13. **Tecnologias** — `.skills-intro`, `.skills-grid`, `.skill-item`, `.skills-group-title`.
14. **Contato** — `.contact__wrap`, `.contact__info`, `.social`, `.social__link`.
15. **Formulário** — `.form`, `.form label`, `.form input`, `.form textarea`, `.form__error`, `.form__submit`.
16. **Footer** — `.footer`, `.footer__inner`, `.footer__brand`, `.footer__name`, `.footer__tagline`, `.footer__social`, `.footer__social-link`, `.footer__copy`.
17. **Página de sucesso** — `.success-wrap`, `.success`, `.success__box`, etc.
18. **Media queries** — 1024px, 768px, 480px.

---

### Componentes principais

| Classe | Descrição |
|--------|-----------|
| `.btn` | Botão base (padding, radius, transição). |
| `.btn--primary` | Botão principal (fundo acento, texto branco). |
| `.btn--secondary` | Botão secundário (borda, fundo branco). |
| `.form__submit` | Botão “Enviar mensagem”: em desktop tem largura automática (`align-self: flex-start`, `min-width: 12rem`); em mobile ocupa 100% (regra dentro de `@media (max-width: 768px)`). |
| `.tag` | Tag de competência (fundo neutro, borda). |
| `.tag--highlight` | Tag em destaque (fundo acento suave, texto acento). |

---

### Formulário

- `.form`: `display: flex`, `flex-direction: column`, `gap: 1rem`.
- Campos e textarea: `width: 100%`, borda, radius, foco com `--accent` e `box-shadow`.
- `.form__submit`: em desktop não ocupa 100% (tamanho confortável); em mobile `width: 100%`, `align-self: stretch`.

---

### Footer

- Fundo em gradiente (`--gray-200` → `--gray-300`), borda superior de 3px na cor `--accent`.
- `.footer__inner`: flex column, centralizado, `gap: 1.25rem`.
- Ícones de redes em círculos (`.footer__social-link`), hover com `--accent-light` e leve `translateY(-2px)`.
- Copyright com borda superior e fonte menor.

---

### Breakpoints (responsivo)

| Breakpoint | Uso principal |
|------------|----------------|
| `max-width: 1024px` | Ajustes de navegação e larguras. |
| `max-width: 768px` | Hero em coluna, grids em 1 coluna, **botão Enviar 100%**, footer com padding reduzido. |
| `max-width: 480px` | Menu oculto (ou hambúrguer), títulos menores. |

---

### Boas práticas no arquivo

- Uso consistente de variáveis para cores e espaçamento.
- Nomenclatura BEM-like (`.block`, `.block__element`, `.block--modifier`).
- Comentários de seção (`/* --- Header --- */`) para localização rápida.
- Media queries agrupadas no final do arquivo.
