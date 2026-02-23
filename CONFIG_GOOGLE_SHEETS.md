# Configurar envio do formulário para o Google Sheets

As mensagens do formulário de contato do portfólio passam a ser salvas numa planilha do Google Sheets. Para isso, você precisa criar a planilha, um script (Google Apps Script) e colar a URL no projeto.

---

## O que você precisa fazer

### 1. Criar a planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com) e faça login na sua conta Google.
2. Crie uma **nova planilha** (em branco).
3. Na **primeira linha**, coloque os cabeçalhos (uma palavra em cada coluna):
   - **A1:** `Data`
   - **B1:** `Nome`
   - **C1:** `Email`
   - **D1:** `Assunto`
   - **E1:** `Mensagem`
4. Opcional: dê um nome à planilha (ex.: "Contatos Portfólio") em **Arquivo > Renomear**.

---

### 2. Criar o script que recebe os dados

1. Na mesma planilha, no menu, clique em **Extensões > Apps Script**.
2. Abre o editor do Apps Script. Apague todo o código que aparecer (por exemplo `function myFunction() { }`).
3. Abra no seu projeto o arquivo **`docs/google-apps-script.js`**.
4. Copie **todo** o conteúdo desse arquivo e cole no editor do Apps Script (substituindo o que estava lá).
5. Salve com **Ctrl+S** (ou **Cmd+S** no Mac). Na primeira vez, dê um nome ao projeto (ex.: "Portfolio Contato") quando pedido.

---

### 3. Implantar o script como aplicativo da web

1. No editor do Apps Script, clique em **Implantar > Nova implantação**.
2. Ao lado de **Tipo**, clique no ícone de engrenagem e escolha **Aplicativo da Web**.
3. Preencha:
   - **Descrição:** por exemplo `Receber formulário do portfólio`
   - **Executar como:** **Eu** (sua conta)
   - **Quem tem acesso:** **Qualquer pessoa**
4. Clique em **Implantar**.
5. Na primeira vez, o Google pede **Autorização**:
   - Clique em **Autorizar acesso**.
   - Escolha sua conta Google.
   - Se aparecer "O Google não verificou este app": clique em **Avançado** e depois em **Ir para Portfolio Contato (não seguro)**. É o seu próprio script, é seguro.
6. Depois de autorizar, aparece a tela **Implantação concluída**.
7. Copie a **URL do aplicativo da web** (algo como `https://script.google.com/macros/s/XXXXXXXXXX/exec`). Guarde essa URL.

---

### 4. Configurar o email de notificação (opcional)

No código que você colou no Apps Script, na **primeira linha útil** (após os comentários), está:

```javascript
var NOTIFICATION_EMAIL = 'SEU_EMAIL_AQUI@exemplo.com';
```

Substitua **`SEU_EMAIL_AQUI@exemplo.com`** pelo email em que você quer receber um aviso a cada nova mensagem (pode ser o mesmo da sua conta Google). Salve o projeto no Apps Script (Ctrl+S). Assim que alguém enviar o formulário, você recebe um email com nome, email, assunto e mensagem.

---

### 5. URL do script no portfólio (só se você criou uma nova implantação)

Neste projeto a URL do Google Apps Script já está definida em **`index.html`** (atributo `action` do formulário) e em **`assets/js/script.js`** (constante `FORM_ACTION_URL`). Só é preciso alterar se você criar uma **nova** implantação e quiser usar outra URL: atualize a `action` do `<form>` no `index.html` e a constante `FORM_ACTION_URL` no `script.js` com a nova URL (termina em `/exec`).

---

### 6. Testar

1. Suba as alterações do projeto (commit e push, se usar Git) e abra o site (local ou no GitHub Pages).
2. Preencha o formulário de contato e clique em **Enviar mensagem**.
3. Você deve ser redirecionada para a página de sucesso.
4. Abra de novo a planilha no Google Sheets: deve aparecer uma nova linha com a data, nome, email, assunto e mensagem.

---

## Resumo rápido

| Onde | O que fazer |
|------|-------------|
| **Google Sheets** | Criar planilha, linha 1: Data \| Nome \| Email \| Assunto \| Mensagem |
| **Extensões > Apps Script** | Colar o código de `docs/google-apps-script.js`, alterar `NOTIFICATION_EMAIL` e salvar |
| **Implantar > Nova implantação** | Tipo: Aplicativo da Web, acesso: Qualquer pessoa, copiar URL |
| **`index.html` e `script.js`** | URL já configurada; alterar só se mudar a implantação |

---

## Se algo der errado

- **"Configure a URL do Google Script"** no formulário: a URL em `script.js` está como placeholder; confira se `FORM_ACTION_URL` e o `action` do form em `index.html` apontam para a URL do seu Apps Script.
- **Página em branco ou erro após enviar:** confira se a URL em `script.js` está igual à do passo "Implantar" (sem espaço no início/fim).
- **Nada aparece na planilha:** ao implantar, você escolheu "Executar como: Eu" e "Quem tem acesso: Qualquer pessoa"? Refaça a implantação se precisar e use a nova URL no `script.js`.
- **Não recebo o email de notificação:** (1) Confira a pasta **Spam**. (2) No Apps Script, abra o projeto, selecione a função **`testarEmail`** no menu de funções (no topo), clique em **Executar**. Na primeira vez o Google pedirá permissão para **"Enviar email em seu nome"** — autorize. Você deve receber um email de teste; depois disso as notificações do formulário passam a chegar. (3) Confirme que `NOTIFICATION_EMAIL` no script está com seu email correto e que você fez uma **nova implantação** após alterar o script.
- **Não redireciona para a página de sucesso:** o script foi atualizado para usar redirecionamento por meta refresh. Faça uma **nova implantação** do Apps Script (Implantar > Gerenciar implantações > Editar > Implantar) para aplicar a alteração.

Se quiser mudar a URL de sucesso (para onde o visitante é redirecionado após enviar), isso é definido automaticamente pelo site; se um dia você mudar de domínio, pode ajustar o fallback dentro do arquivo `docs/google-apps-script.js` (variável `nextUrl` quando está vazia).
