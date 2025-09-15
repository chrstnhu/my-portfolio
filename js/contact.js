const contactSection = document.querySelector('#contact');

// Crée la grille 2x2 pour les rubriques contact
const contactGrid = document.createElement('div');
contactGrid.classList.add('contact-grid');
contactSection.appendChild(contactGrid);

// Email
const emailDiv = document.createElement('div');
emailDiv.classList.add('contact-item');
emailDiv.innerHTML = `
  <h2><span aria-hidden="true" style="margin-right:8px;">📧</span>Email</h2>
`;
const emailButton = document.createElement('button');
emailButton.textContent = "Afficher mon email";
emailButton.setAttribute('aria-label', 'Afficher mon adresse email');
emailButton.classList.add('bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded', 'mb-2', 'focus:outline-none');
emailButton.addEventListener('click', () => {
  if (!document.getElementById('email-value')) {
    const emailP = document.createElement('p');
    emailP.id = 'email-value';
    emailP.innerHTML = `<a href="mailto:chrhu@example.com" tabindex="0">chrhu@example.com</a>`;
    emailDiv.appendChild(emailP);
    emailP.querySelector('a').focus();
  }
});
emailDiv.appendChild(emailButton);
contactGrid.appendChild(emailDiv);

// GitHub
const githubDiv = document.createElement('div');
githubDiv.classList.add('contact-item');
githubDiv.innerHTML = `
  <h2><span aria-hidden="true" style="margin-right:8px;">🐙</span>GitHub</h2>
  <a href="https://github.com/chrhu" target="_blank" rel="noopener" aria-label="Voir mon profil GitHub" class="bg-gray-800 text-white py-2 px-4 rounded inline-block focus:outline-none focus:ring-2 focus:ring-blue-500">Voir mon GitHub</a>
`;
contactGrid.appendChild(githubDiv);

// LinkedIn
const linkedinDiv = document.createElement('div');
linkedinDiv.classList.add('contact-item');
linkedinDiv.innerHTML = `
  <h2><span aria-hidden="true" style="margin-right:8px;">💼</span>LinkedIn</h2>
  <a href="https://linkedin.com/in/chrhu" target="_blank" rel="noopener" aria-label="Voir mon profil LinkedIn" class="bg-blue-700 text-white py-2 px-4 rounded inline-block focus:outline-none focus:ring-2 focus:ring-blue-700">Voir mon LinkedIn</a>
`;
contactGrid.appendChild(linkedinDiv);
