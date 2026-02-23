/**
 * Google Apps Script — Formulário de contato do portfólio
 * - Grava cada mensagem na planilha (primeira aba)
 * - Envia email para cdouradom@gmail.com a cada nova mensagem
 * - Redireciona o visitante para a página de sucesso
 *
 * Planilha: primeira linha deve ter Data | Nome | Email | Assunto | Mensagem
 * Implantar como Aplicativo da Web: Executar como Eu, Acesso Qualquer pessoa
 */

var NOTIFICATION_EMAIL = 'cdouradom@gmail.com';

function doGet() {
  return HtmlService.createHtmlOutput(
    '<!DOCTYPE html><html><body style="font-family:sans-serif;padding:2rem;text-align:center;">' +
    '<p>Use o formulário do portfólio para enviar mensagens.</p>' +
    '<p><a href="https://cdouradom.github.io/PORTFOLIO/">Voltar ao portfólio</a></p>' +
    '</body></html>'
  );
}

function doPost(e) {
  e = e || {};
  var params = e.parameter || {};
  var postData = (e.postData && e.postData.contents) ? e.postData.contents : '';

  if (!params.name && postData) {
    params = parseFormData(postData);
  }

  var nextUrl = (params.nextUrl || params._next || '').toString().trim();
  if (!nextUrl) {
    nextUrl = 'https://cdouradom.github.io/PORTFOLIO/success.html';
  }

  var name = (params.name || '').toString().trim();
  var email = (params.email || '').toString().trim();
  var subject = (params.subject || '').toString().trim();
  var message = (params.message || '').toString().trim();

  var sheet = null;
  try {
    sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([new Date(), name, email, subject, message]);
  } catch (err) {
    return createRedirectHtml(nextUrl, true);
  }

  try {
    var emailBody = 'Nova mensagem recebida pelo formulário do portfólio.\n\n' +
      'Nome: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Assunto: ' + subject + '\n\n' +
      'Mensagem:\n' + message;
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: '[Portfólio] Nova mensagem: ' + (subject || '(sem assunto)'),
      body: emailBody
    });
  } catch (mailErr) {
  }

  return createRedirectHtml(nextUrl, false);
}

function parseFormData(contents) {
  var params = {};
  var pairs = contents.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var p = pairs[i].split('=');
    if (p.length >= 2) {
      params[decodeURIComponent(p[0].replace(/\+/g, ' '))] = decodeURIComponent((p.slice(1).join('=')).replace(/\+/g, ' '));
    }
  }
  return params;
}

function createRedirectHtml(nextUrl, hasError) {
  var safeUrl = nextUrl
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;');
  var urlInScript = JSON.stringify(nextUrl);
  var html = '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta http-equiv="refresh" content="0;url=' + safeUrl + '">' +
    '<title>Redirecionando</title></head><body>' +
    '<p>Redirecionando... <a href="' + safeUrl + '" id="link">Clique aqui</a> se não for redirecionado.</p>' +
    '<script>try{window.top.location.href=' + urlInScript + ';}catch(z){document.getElementById("link").click();}<\/script>' +
    '</body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function testarEmail() {
  MailApp.sendEmail(
    NOTIFICATION_EMAIL,
    '[Portfólio] Teste de notificação',
    'Se você recebeu este email, as notificações estão ok.'
  );
}
