const pages = document.querySelectorAll('.page');

function showPage(hash) {
  pages.forEach(page => {
    page.style.display = ('#' + page.id === hash) ? 'block' : 'none';
  });
  
  // Trigger animations based on displayed page
  switch(hash) {
    case '#about':
      if (typeof initAbout === 'function') {
        initAbout();
      }
      break;
    case '#projects':
      if (typeof initProjects === 'function') {
        initProjects();
      }
      break;
    case '#skills':
      if (typeof initSkills === 'function') {
        initSkills();
      }
      break;
    case '#contact':
      if (typeof initContact === 'function') {
        initContact();
      }
      break;
  }
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

// Handle logo click to go home
const logoLink = document.getElementById('logo-link');
if (logoLink) {
  logoLink.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, '', '#home');
    showPage('#home');
  });
}

// Handle language selector
document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('language-selector');
  if (languageSelector) {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageSelector.value = savedLanguage;
    
    languageSelector.addEventListener('change', (e) => {
      const selectedLanguage = e.target.value;
      if (typeof changeLanguage === 'function') {
        changeLanguage(selectedLanguage);
        reloadAllPages();
      }
    });
  }
});

// Reload all pages content
function reloadAllPages() {
  const activePage = document.querySelector('.page:not([style*="display: none"])');
  const activePageId = activePage ? activePage.id : 'home';
  
  document.getElementById('home').innerHTML = '';
  document.getElementById('about').innerHTML = '';
  document.getElementById('projects').innerHTML = '';
  document.getElementById('skills').innerHTML = '';
  document.getElementById('contact').innerHTML = '';
  
  loadHomeContent();
  loadAboutContent();
  loadProjectsContent();
  loadSkillsContent();
  loadContactContent();
  showPage('#' + activePageId);
}

// Load each section content if the function exists
function loadHomeContent() {
  if (typeof loadHome === 'function') {
    loadHome();
  }
}

function loadAboutContent() {
  if (typeof loadAbout === 'function') {
    loadAbout();
  }
}

function loadProjectsContent() {
  if (typeof loadProjects === 'function') {
    loadProjects();
  }
}

function loadSkillsContent() {
  if (typeof loadSkills === 'function') {
    loadSkills();
  }
}

function loadContactContent() {
  if (typeof loadContact === 'function') {
    loadContact();
  }
}
