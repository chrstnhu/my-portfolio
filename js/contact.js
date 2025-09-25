const contactSection = document.querySelector('#contact');

// Create contact card container
function createContactContainer() {
  const div = document.createElement('div');
  div.classList.add('bg-slate-50', 'rounded-xl', 'shadow-xl', 'p-8', 'mb-8', 'flex', 'flex-col', 'items-start', 'w-full', 'box-border', 'transition-all', 'duration-300', 'hover:shadow-2xl', 'hover:-translate-y-1', 'hover:bg-slate-100');
  return div;
}

// Create Email section
function createEmailSection() {
  const emailDiv = createContactContainer();
  emailDiv.innerHTML = `
    <h2 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2"><span aria-hidden="true">📧</span>Email</h2>
  `;
  
  const emailButton = document.createElement('button');
  emailButton.textContent = t('showEmail');
  emailButton.setAttribute('aria-label', 'Show my email address');
  emailButton.classList.add('bg-blue-600', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'font-semibold', 'text-center', 'transition-colors', 'duration-200', 'hover:bg-blue-700', 'inline-block', 'no-underline');
  
  emailButton.addEventListener('click', () => {
    const existingEmail = document.getElementById('email-value');
    if (!existingEmail) {
      const emailP = document.createElement('p');
      emailP.id = 'email-value';
      emailP.innerHTML = `<a href="mailto:christinehu@live.be" tabindex="0" class="text-blue-600 hover:text-blue-800 underline">christinehu@live.be</a>`;
      emailDiv.appendChild(emailP);
      emailP.querySelector('a').focus();
      emailButton.textContent = t('hideEmail');
      emailButton.setAttribute('aria-label', 'Hide my email address');
    } else {
      existingEmail.remove();
      emailButton.textContent = t('showEmail');
      emailButton.setAttribute('aria-label', 'Show my email address');
    }
  });
  
  emailDiv.appendChild(emailButton);
  return emailDiv;
}

// Create GitHub section
function createGitHubSection() {
  const githubDiv = createContactContainer();
  githubDiv.innerHTML = `
    <h2 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2"><span aria-hidden="true">🐙</span>GitHub</h2>
    <a href="https://github.com/chrstnhu" target="_blank" rel="noopener" aria-label="Check my profile" class="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block outline-none transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-blue-600 no-underline">${t('viewGithub')}</a>
  `;
  return githubDiv;
}

// Create LinkedIn section
function createLinkedInSection() {
  const linkedinDiv = createContactContainer();
  linkedinDiv.innerHTML = `
    <h2 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2"><span aria-hidden="true">💼</span>LinkedIn</h2>
    <a href="https://fr.linkedin.com/in/christine-hu-" target="_blank" rel="noopener" aria-label="Check my LinkedIn profile" class="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg inline-block focus:outline-none focus:ring-2 focus:ring-blue-700 transition-colors duration-200">${t('viewLinkedin')}</a>
  `;
  return linkedinDiv;
}

// Create contact grid container
function createContactGrid() {
  const contactGrid = document.createElement('div');
  contactGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8', 'mb-8', 'mt-8');
  return contactGrid;
}

// Global variables to be able to replay animations
let contactBlocks = [];

// Function called each time we navigate to Contact
function initContact() {
  loadContact();
  initPageAnimation(contactBlocks, {
    animationOptions: { betweenDelay: 200 }
  });
}

// Load Contact content with animations
function loadContact() {
  contactSection.innerHTML = '';
  contactSection.classList.add('pt-16');

  const contactGrid = createContactGrid();
  contactSection.appendChild(contactGrid);

  const emailSection = createEmailSection();
  const githubSection = createGitHubSection();
  const linkedinSection = createLinkedInSection();

  contactGrid.appendChild(emailSection);
  contactGrid.appendChild(githubSection);
  contactGrid.appendChild(linkedinSection);

  contactBlocks = [emailSection, githubSection, linkedinSection];
  prepareElementsForAnimation(contactBlocks, { duration: 800 });
  startSequentialFadeIn(contactBlocks, { betweenDelay: 200 });
}

// Initialize content
loadContact();
