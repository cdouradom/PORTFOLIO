/**
 * Portfólio — Cintia Dourado
 * - Enriquecimento da seção About com API GitHub (avatar + estatísticas)
 * - Validação do formulário de contato
 * - Correção de âncoras com header fixo
 */

(function () {
  'use strict';

  const GITHUB_USER = 'cdouradom';
  const HEADER_OFFSET = 72;

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

  // --- Validação do formulário ---
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

      if (valid) form.submit();
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
