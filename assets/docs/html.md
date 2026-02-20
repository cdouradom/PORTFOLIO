# Documentação do HTML — Projeto Portfólio

Referência das tags e estrutura HTML usadas no portfólio (Cintia Dourado — QA Estratégica & Quality Manager).

---

### Estrutura e documento


| Tag               | Função / Descrição                              | Atributos comuns             | Exemplo no projeto                                                 |
| ----------------- | ----------------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `<!DOCTYPE html>` | Define o tipo de documento HTML5.               | —                            | `<!DOCTYPE html>`                                                  |
| `<html>`          | Elemento raiz do documento.                     | `lang`                       | `<html lang="pt-BR">`                                              |
| `<head>`          | Metadados, links, fontes e título.              | —                            | `<head> ... </head>`                                               |
| `<meta>`          | Charset, viewport, description, author, robots. | `charset`, `name`, `content` | `<meta name="author" content="Cintia Dourado">`                    |
| `<title>`         | Título da aba do navegador.                     | —                            | `<title>Cintia Dourado — QA Estratégica & Quality Manager</title>` |
| `<link>`          | CSS, favicon, fontes.                           | `rel`, `href`, `crossorigin` | `<link rel="stylesheet" href="./assets/css/styles.css">`           |
| `<script>`        | JavaScript ao final do body.                    | `src`                        | `<script src="./assets/js/script.js"></script>`                    |


---

### Estrutura visual (layout)


| Tag         | Função / Descrição                               | Atributos comuns | Exemplo no projeto                          |
| ----------- | ------------------------------------------------ | ---------------- | ------------------------------------------- |
| `<body>`    | Conteúdo visível da página.                      | `class`          | `<body> ... </body>`                        |
| `<header>`  | Cabeçalho fixo (nome + navegação).               | `class`          | `<header class="header">`                   |
| `<main>`    | Conteúdo principal (seções).                     | —                | `<main> ... </main>`                        |
| `<section>` | Blocos de conteúdo (hero, about, contact, etc.). | `id`, `class`    | `<section id="hero" class="hero">`          |
| `<article>` | Conteúdo autossuficiente (ex.: texto sobre mim). | `class`          | `<article class="about__content">`          |
| `<nav>`     | Navegação (menu ou redes).                       | `aria-label`     | `<nav><ul class="nav__list">...</ul></nav>` |
| `<footer>`  | Rodapé (nome, tagline, redes, copyright).        | `class`          | `<footer class="footer">`                   |


Seções do portfólio: `#hero`, `#about`, `#quality`, `#experience`, `#competencies`, `#projects`, `#technologies`, `#contact`.

---

### Navegação e listas


| Tag    | Função / Descrição              | Atributos comuns                             | Exemplo no projeto                                          |
| ------ | ------------------------------- | -------------------------------------------- | ----------------------------------------------------------- |
| `<ul>` | Lista não ordenada (menu).      | `class`                                      | `<ul class="nav__list">`                                    |
| `<li>` | Item de lista.                  | —                                            | `<li><a href="#contact">Contato</a></li>`                   |
| `<a>`  | Links internos (#) ou externos. | `href`, `target`, `rel`, `class`, `download` | `<a href="#about" class="btn btn--secondary">Sobre mim</a>` |


---

### Conteúdo e texto


| Tag             | Função / Descrição                     | Atributos comuns | Exemplo no projeto                                            |
| --------------- | -------------------------------------- | ---------------- | ------------------------------------------------------------- |
| `<h1>` – `<h4>` | Títulos hierárquicos.                  | `class`          | `<h1 class="hero__title">Qualidade com visão de negócio</h1>` |
| `<p>`           | Parágrafo.                             | `class`          | `<p class="hero__subtitle">...</p>`                           |
| `<span>`        | Trecho inline (ex.: mensagem de erro). | `id`, `class`    | `<span id="txtEmail" class="form__error"></span>`             |


---

### Mídia e elementos gráficos


| Tag        | Função / Descrição              | Atributos comuns                 | Exemplo no projeto                                                            |
| ---------- | ------------------------------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `<img>`    | Imagem (avatar, ícones, logos). | `src`, `alt`, `class`, `loading` | `<img src="./assets/img/dev_Cintia.png" alt="Cintia Dourado" loading="lazy">` |
| `<figure>` | Agrupa imagem e legenda.        | `class`                          | `<figure class="about__figure">...</figure>`                                  |


---

### Formulários e interação


| Tag          | Função / Descrição              | Atributos comuns                              | Exemplo no projeto                                                                     |
| ------------ | ------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| `<form>`     | Agrupa campos e botão de envio. | `action`, `method`, `id`, `class`             | `<form action="https://formsubmit.co/..." method="POST" id="form" class="form">`       |
| `<label>`    | Rótulo do campo.                | `for`                                         | `<label for="name">Nome</label>`                                                       |
| `<input>`    | Campo de texto, email, etc.     | `type`, `name`, `id`, `placeholder`, `hidden` | `<input type="email" name="email" id="email" placeholder="Seu email">`                 |
| `<textarea>` | Mensagem multilinha.            | `id`, `name`, `placeholder`                   | `<textarea id="message" name="message" placeholder="Sua mensagem..."></textarea>`      |
| `<button>`   | Botão de envio.                 | `type`, `class`                               | `<button type="submit" class="btn btn--primary form__submit">Enviar mensagem</button>` |


---

### Recursos e acessibilidade


| Recurso                        | Uso no projeto                                                         |
| ------------------------------ | ---------------------------------------------------------------------- |
| `<link rel="preconnect">`      | Pré-conexão com Google Fonts.                                          |
| `<meta name="viewport">`       | `content="width=device-width, initial-scale=1.0"` para responsividade. |
| `<meta name="robots">`         | `content="index, follow"` para indexação.                              |
| `<meta name="author">`         | `content="Cintia Dourado"`.                                            |
| `aria-label` em links de redes | Ex.: `aria-label="LinkedIn"` nos ícones do footer.                     |


---

### Download de arquivos


| Atributo   | Função                                  | Exemplo                                                                                                  |
| ---------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `download` | Sugere download em vez de abrir na aba. | `<a href="./assets/docs/Curriculo_PT.pdf" download="Cintia_Dourado_Curriculo_PT.pdf">Currículo (PT)</a>` |


