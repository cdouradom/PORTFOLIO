// Selecionar a Seção Abaout

const about = document.querySelector('#about');

// Selecionar o formulario
const form = document.querySelector('#form');

// Expressao regular para validação de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; //alterei a expressao por uma que valida tbm dominios maiores, que é mais moderna.


// Função para Buscar os Dados no GitHub e sobrescrever o que havia no codigo
async function getApiGitHub(){
    try{

        //Primeiro passo - Fazer uma requisicao GET para a API publica no GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/cdouradom')

        //Segundo passo - Converter a respostas da API para Json
        const perfilJson = await dadosPerfil.json();
    
        //Terceiro passo - Criar o html/css com os dados do perfil recebidos da API
        let conteudo = `

        <!-- FOTO DO PERFIL -->
        <figure class="about_image">
            <img 
                src="${perfilJson.avatar_url}" 
                alt="Foto do perfil do GitHub - ${perfilJson.name}"
            >
        </figure>

        <!-- CONTEÚDO DO PERFIL -->
        <article class="about_content">
            <h2>About Me</h2>
                <p>I am a curious and creative person who loves to learn. I like challenges, new ideas, and growing with every experience.</p>
                <p>As a QA professional currently studying Java Full Stack development, I believe that integrating quality and development can build smarter and more impactful products.</p>
                <p>My goal is to keep learning, grow in the tech area, and help build projects that make a difference. Every step is a chance to learn and do something better.</p>

            <div class="about_stats">
                <a href="${perfilJson.html_url}" target="_blank" class="button">View GitHub</a>
                <div class="stats-wrapper">
                    <div class="stat-item">
                        <p class="stat-number">${perfilJson.followers}</p>
                        <p class="stat-label">Followers</p>
                    </div>
                    <div class="stat-item">
                        <p class="stat-number">${perfilJson.public_repos}</p>
                        <p class="stat-label">Repositories</p>
                    </div>
                </div>
            </div>

        </article>
        
        `

        //Quarto passo - Adicionar o HTML dentro da Seção About
        about.innerHTML = conteudo; // removi o += para evitar de gerar duplicação caso a função seja chamada mais de uma vez

    }catch(error){
        console.error(error);
    }
}

// --- VALIDAÇÃO DO FORMULÁRIO ---
if (form) { // Função de envio e validação do formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault(); //impede o envio automatico do formulário sem as validações a seguir

   //Validação do campo nome
    const campoName = document.querySelector('#name');
    const txtName = document.querySelector('#txtName');
   
    //Nome precisa ter pelo menos 3 caracteres
    if(campoName.value.length < 3){
      txtName.innerHTML = 'Name must have at least 3 characters.';
      campoName.focus();
      return;
    }else{
      txtName.innerHTML = '';
    }
 
   //Validação do campo email
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
   
    //Verifica se o email é válido
    if(!campoEmail.value.match(emailRegex)){
      txtEmail.innerHTML = 'Please enter a valid email address.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
 
    //Validação do campo subject
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
   
    //Subject precisa ter pelo menos  caracteres
    if(campoSubject.value.length < 5){
      txtSubject.innerHTML = 'Subject must have at least 5 characters.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }
 
    // Validação do campo message
    const campoMessage = document.querySelector('#message');
    const txtMessage = document.querySelector('#txtMessage');

    if(campoMessage.value.trim() === ''){
      txtMessage.innerHTML = 'Please enter your message.';
      campoMessage.focus();
      return;
    } else {
      txtMessage.innerHTML = '';
    }

    //Se passou por todas as validações, envia o formulário
    form.submit();
 
  });
}

//prevent default: não envia o formulario enquanto nao fizer a validação
//focus: coloca o cursor no campo que precisa ser preenchido
 

// Ultimo passo - Chamar a API e executar a função
if (about) getApiGitHub();


// --- Corrige deslocamento das âncoras ao vir de outra página ---

/* =========================================================
   Correção do deslocamento das âncoras por causa do header fixo
   -------------------------------------------------------------
   Explicação:
   Quando clicamos em links como #about ou #contact 
   para um redirect de outra pagina para seções especificas,
   o header fixo cobre parte da seção.
   Esse cria uma margem interna de rolagem,
   garantindo que a seção fique totalmente visível ao clicar.
   Ajuste o valor (em px) conforme a altura real do header.
========================================================= */

window.addEventListener("load", function() {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      // tempo de espera para garantir que a página terminou de renderizar
      setTimeout(() => {
        const headerOffset = 80; // altura aproximada do header fixo
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300);
    }
  }
});

