# Análise e Refatoração do Portfólio — Cintia Dourado

Documento de análise do portfólio atual, proposta de arquitetura, melhorias implementadas (ou planejadas) e orientações de deploy.

---

## 1. Análise do Projeto Atual

### 1.1 Estrutura e Organização
- **Problema:** Conteúdo da seção About injetado via JS (HTML vazio no index), dificultando SEO e manutenção.
- **Problema:** Uma única folha de CSS (~1000 linhas) com repetição de breakpoints e estilos; sem separação por componentes ou temas.
- **Problema:** Navegação limitada (Hero, About, Contact); faltam Experiência, Competências Estratégicas, Projetos e seção de diferencial em pensamento estratégico de qualidade.
- **Problema:** Hero posiciona como "Java Full Stack Dev" em destaque, desalinhado com o posicionamento atual (QA Estratégica / Quality Manager).

### 1.2 UX e Conteúdo
- **Problema:** Posicionamento confuso: título principal é dev, texto fala em QA + estudos em Java — não transmite maturidade estratégica.
- **Problema:** Não há seção de experiência profissional nem de competências estratégicas (governança, risco, impacto, e-commerce, integrações).
- **Problema:** Falta seção que diferencie QA operacional de QA estratégica (risco, impacto, governança, previsibilidade, valor).
- **Problema:** Skills focadas só em dev (Frontend/Backend); competências de QA, testes, ferramentas e metodologias não aparecem de forma estruturada.

### 1.3 Design
- **Problema:** Paleta rosé/terrosa, adequada a um portfólio criativo, mas menos alinhada a um perfil executivo e recrutadores internacionais.
- **Problema:** Uso de emojis no título e menu ("❤︎", "🪄", "🎨") pode reduzir percepção de seriedade.
- **Problema:** Footer fixo ocupa espaço constante; em telas pequenas pode competir com conteúdo.

### 1.4 Código e Performance
- **Problema:** About depende de API do GitHub para renderizar; se a API falhar ou estiver lenta, a seção fica vazia sem fallback.
- **Problema:** Sem preload de fontes críticas; uma única família (Poppins) sem variantes (weight) definidas de forma explícita em alguns lugares.
- **Problema:** Imagens referenciadas sem `loading="lazy"` onde faria sentido (ex.: skills, about).

### 1.5 Clareza de Posicionamento
- **Problema:** Recrutador não identifica rapidamente: QA Estratégica, Quality Manager, Governança de Delivery, E-commerce, Integrações, IA na Qualidade.
- **Problema:** Java Full Stack aparece como foco principal em vez de base técnica complementar.

---

## 2. Proposta de Nova Arquitetura

### 2.1 Hierarquia de informação (ordem das seções)
1. **Hero** — Mensagem principal: QA Estratégica / Quality Manager (subtítulo com governança, e-commerce, integrações).
2. **Sobre mim** — Texto executivo, visão de negócio e qualidade; foto (GitHub API ou estática) e link para perfil.
3. **Como penso qualidade estrategicamente** — Diferencial: Risco, Impacto, Governança, Previsibilidade, Valor para o negócio.
4. **Experiência** — Timeline ou cards (cargos/contextos sem inventar dados; estrutura pronta para preencher com currículo).
5. **Competências estratégicas** — QA, Governança de Delivery, Estratégia de Testes, E-commerce B2B/B2C, Integrações, Releases E2E, IA aplicada à Qualidade, Análise de risco e impacto, Ágil (Scrum/Kanban).
6. **Projetos relevantes** — Repositórios GitHub + descrição breve (mantendo o que já existe, sem inventar).
7. **Tecnologias** — Reorganizado: ferramentas de QA/testes + stack técnica (Java Full Stack e demais já listadas).
8. **Contato** — Formulário + redes; mantido como está em funcionalidade.

### 2.2 Estrutura de pastas (recomendada)

```
/
├── index.html          # Página principal (conteúdo semântico completo)
├── success.html        # Página pós-envio do formulário
├── REFATORACAO.md      # Este documento
├── README.MD           # Instruções e deploy
├── assets/
│   ├── css/
│   │   └── styles.css  # Único CSS (variáveis, base, seções, responsivo)
│   ├── js/
│   │   └── script.js   # API GitHub (avatar/stats), validação, âncoras
│   ├── img/            # Ícones e imagens (manter existentes)
│   └── docs/           # Documentação interna (opcional)
```

**Justificativa:** Manter HTML/CSS/JS puro, sem etapa de build, permite deploy direto no GitHub Pages e na Vercel (site estático). Introduzir framework ou bundler aumentaria a complexidade sem necessidade imediata para um portfólio single-page.

### 2.3 Diretrizes de design

- **Paleta:** Azul escuro (primário), branco e cinza (neutros); um acento discreto para CTAs e links.
- **Tipografia:** Fonte moderna e legível (ex.: Inter ou similar); hierarquia clara (h1, h2, h3).
- **Layout:** Conteúdo com largura controlada (ex.: max-width 720–960px para texto); bom uso de espaço em branco; sem poluição visual.
- **Tom:** Executivo e objetivo; sem emojis no título/menu; opcionalmente um único emoji no footer.

---

## 3. Melhorias implementadas (resumo)

Resumo do escopo da refatoração (itens implementados ou planejados):

- **Hero:** Título e subtítulo alinhados a QA Estratégica e Quality Manager.
- **Sobre mim:** Conteúdo estratégico em HTML (com fallback se a API falhar) e uso da API do GitHub para avatar e estatísticas.
- **Como penso qualidade estrategicamente:** Nova seção com os cinco pilares — Risco, Impacto, Governança, Previsibilidade, Valor para o negócio.
- **Novas seções:** Experiência (estrutura pronta para preencher com dados reais do currículo), Competências estratégicas, Projetos (GitHub), Tecnologias (QA + Dev).
- **Design:** Variáveis CSS com paleta azul escuro / branco / cinza; tipografia moderna; layout limpo e responsivo.
- **Código:** About com conteúdo estático + enriquecimento via API; validação de formulário e âncoras mantidas; lazy loading onde aplicável.
- **README:** Atualizado com instruções de deploy (GitHub Pages e Vercel).

---

## 4. Sugestões de melhorias futuras

Evolução contínua do portfólio:

- **Conteúdo:** Preencher a seção Experiência com datas, empresas e conquistas reais do currículo.
- **i18n:** Oferecer versão em inglês para recrutadores internacionais (página separada ou toggle).
- **SEO:** Meta tags Open Graph e Twitter Card; JSON-LD (Person) para rich results.
- **Acessibilidade:** Revisar contraste (WCAG AA), landmarks ARIA e gerenciamento de foco no formulário.
- **Performance:** Comprimir imagens (WebP onde possível); considerar critical CSS inline no `<head>`.
- **Deploy:** Configurar domínio customizado no GitHub Pages ou na Vercel, com HTTPS.

---

## 5. Orientação para deploy

### GitHub Pages

1. Repositório no GitHub; branch `main` (ou `gh-pages`, conforme configurado).
2. **Settings → Pages → Source:** Deploy from branch; branch `main`, pasta `/ (root)`.
3. Dar push do código; o site ficará em `https://<user>.github.io/<repo>/`.

### Vercel

1. Conectar o repositório em [vercel.com](https://vercel.com); criar projeto do tipo **Static**.
2. **Build command:** deixar vazio. **Output directory:** `.` (raiz).
3. Fazer o deploy; a Vercel gera a URL e permite configurar domínio customizado.

Ambos servem HTML/CSS/JS estáticos, sem necessidade de servidor backend.
