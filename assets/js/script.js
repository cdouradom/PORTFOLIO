/**
 * Portfólio — Cintia Dourado
 * - Enriquecimento da seção About com API GitHub (avatar + estatísticas)
 * - Validação do formulário de contato e envio para Google Sheets (Apps Script)
 * - Correção de âncoras com header fixo
 */

(function () {
  'use strict';

  const GITHUB_USER = 'cdouradom';
  const HEADER_OFFSET = 72;

  /**
   * URL do Google Apps Script (Aplicativo da Web).
   * Substitua pela URL que você obteve ao implantar o script em docs/google-apps-script.js
   * Ex.: 'https://script.google.com/macros/s/XXXXXXXXXX/exec'
   */
  const FORM_ACTION_URL = 'https://script.google.com/macros/s/AKfycbzmytfNKINwG7OQ60X1kjAwy_yY_vHlHu5AkCrNu9qSaDmKeH2qXFOKtLOeCAN9e0iH/exec';

  // --- API GitHub (avatar + stats) ---
  async function enrichAboutFromGitHub() {
    const avatarEl = document.getElementById('about-avatar');
    const followersEl = document.getElementById('stat-followers-n');
    const reposEl = document.getElementById('stat-repos-n');

    if (!avatarEl && !followersEl && !reposEl) return;

    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
      if (!res.ok) throw new Error('GitHub API error');
      const data = await res.json();

      if (avatarEl && data.avatar_url) {
        avatarEl.src = data.avatar_url;
        avatarEl.alt = data.name || 'Cintia Dourado';
      }
      if (followersEl) followersEl.textContent = data.followers ?? '—';
      if (reposEl) reposEl.textContent = data.public_repos ?? '—';
    } catch (err) {
      console.warn('GitHub API:', err.message);
      if (followersEl) followersEl.textContent = '—';
      if (reposEl) reposEl.textContent = '—';
    }
  }

  // --- Validação e envio do formulário (Google Sheets via Apps Script) ---
  const form = document.getElementById('form');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const txtName = document.getElementById('txtName');
      const txtEmail = document.getElementById('txtEmail');
      const txtSubject = document.getElementById('txtSubject');
      const txtMessage = document.getElementById('txtMessage');
      const submitBtn = document.getElementById('form-submit-btn');

      let valid = true;

      if (!name || name.value.trim().length < 3) {
        if (txtName) txtName.textContent = 'Nome deve ter pelo menos 3 caracteres.';
        if (name) name.focus();
        valid = false;
      } else if (txtName) txtName.textContent = '';

      if (valid && (!email || !email.value.match(emailRegex))) {
        if (txtEmail) txtEmail.textContent = 'Informe um email válido.';
        if (email) email.focus();
        valid = false;
      } else if (txtEmail) txtEmail.textContent = '';

      if (valid && (!subject || subject.value.trim().length < 5)) {
        if (txtSubject) txtSubject.textContent = 'Assunto deve ter pelo menos 5 caracteres.';
        if (subject) subject.focus();
        valid = false;
      } else if (txtSubject) txtSubject.textContent = '';

      if (valid && (!message || message.value.trim() === '')) {
        if (txtMessage) txtMessage.textContent = 'Escreva sua mensagem.';
        if (message) message.focus();
        valid = false;
      } else if (txtMessage) txtMessage.textContent = '';

      if (!valid) return;

      if (!FORM_ACTION_URL || FORM_ACTION_URL === 'YOUR_GOOGLE_SCRIPT_URL') {
        if (txtMessage) txtMessage.textContent = 'Configure a URL do Google Script em script.js (FORM_ACTION_URL).';
        return;
      }

      var origin = typeof window.location.origin !== 'undefined' ? window.location.origin : '';
      var pathname = window.location.pathname || '/';
      var base = pathname.endsWith('/') ? pathname : pathname.replace(/\/[^/]*$/, '/');
      if (base === '/' && origin.indexOf('github.io') !== -1) {
        base = '/PORTFOLIO/';
      }
      var successUrl = origin ? (origin + base + 'success.html') : 'https://cdouradom.github.io/PORTFOLIO/success.html';

      var originalLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
      if (txtMessage) txtMessage.textContent = '';

      var formData = 'name=' + encodeURIComponent(name.value.trim()) +
        '&email=' + encodeURIComponent(email.value.trim()) +
        '&subject=' + encodeURIComponent(subject.value.trim()) +
        '&message=' + encodeURIComponent(message.value.trim()) +
        '&nextUrl=' + encodeURIComponent(successUrl);

      fetch(FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      }).then(function () {
        window.location.href = successUrl;
      }).catch(function () {
        if (txtMessage) txtMessage.textContent = 'Erro ao enviar. Tente novamente.';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      });
    });
  }

  // --- Correção de âncoras (header fixo) ---
  window.addEventListener('load', function () {
    if (window.location.hash) {
      var target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(function () {
          var top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }, 300);
      }
    }
  });

  // --- Inicialização ---
  enrichAboutFromGitHub();
})();
