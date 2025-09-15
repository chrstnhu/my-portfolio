const pages = document.querySelectorAll('.page');

function showPage(hash) {
  pages.forEach(page => {
    page.style.display = ('#' + page.id === hash) ? 'block' : 'none';
  });
}

showPage(window.location.hash || '#home');

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const hash = e.target.getAttribute('href');
    history.pushState(null, '', hash);
    showPage(hash);
  });
});


window.addEventListener('popstate', () => {
  showPage(window.location.hash || '#home');
});

// Clique sur le logo ramène à la home
const logoLink = document.getElementById('logo-link');
if (logoLink) {
  logoLink.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, '', '#home');
    showPage('#home');
  });
}
