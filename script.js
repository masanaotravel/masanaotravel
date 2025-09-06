// Simple enhancements: dynamic year & mailto form submit
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.querySelector('form[data-mailto]');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const to = form.getAttribute('data-mailto');
  const data = new FormData(form);
  const subject = encodeURIComponent('Travel Inquiry — ' + (data.get('service') || 'General'));
  const rows = [];
  for (const [key, value] of data.entries()){
    rows.push(`${key}: ${value}`);
  }
  const body = encodeURIComponent(rows.join('\n'));
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
