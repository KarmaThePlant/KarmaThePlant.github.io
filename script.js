// Shared behavior across all pages: mobile nav toggle + footer year.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const tabs = document.getElementById('navTabs');

  if (toggle && tabs) {
    toggle.addEventListener('click', () => {
      const isOpen = tabs.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    tabs.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      tabs.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
