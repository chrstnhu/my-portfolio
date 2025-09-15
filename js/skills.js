const skillsSection = document.querySelector('#skills');

// Fonction pour créer une section de skills dynamique et réutilisable
function createSkillSection(title, skills = []) {
  // Crée le conteneur de la section
  const section = document.createElement('section');
  section.classList.add('skills-group');

  // Crée le header
  const header = document.createElement('h2');
  header.classList.add('skills-header');
  header.textContent = title;
  section.appendChild(header);

  // Crée le conteneur des skills
  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('skills-list');

  for (let skill of skills) {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill-item', 'bg-blue-200', 'hover:bg-blue-300', 'transition', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'items-center', 'justify-center');

    // Image du skill
    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = skill.name;
    img.classList.add('skill-img');
  
    // Nom du skill
    const name = document.createElement('span');
    name.classList.add('skill-name');
    name.textContent = skill.name;

    skillDiv.appendChild(img);
    skillDiv.appendChild(name);
    skillsContainer.appendChild(skillDiv);
  }

  section.appendChild(skillsContainer);
  return section;
}

// Exemple d'utilisation :
const skillSections = [
  {
    title: 'Outils',
    skills: [
      { name: 'VS Code', img: 'assets/img/Visual Studio Code (VS Code).png' },
      { name: 'GitHub', img: 'assets/img/GitHub.png' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Tailwind CSS', img: 'assets/img/Tailwind CSS.png' },
      { name: 'TypeScript', img: 'assets/img/TypeScript.png' },
    ]
  },
  {
    title: 'Langages',
    skills: [
      { name: 'HTML5', img: 'assets/img/HTML5.png' },
      { name: 'CSS3', img: 'assets/img/CSS3.png' },
      { name: 'C++', img: 'assets/img/C++.png' },
      { name: 'JavaScript', img: 'assets/img/JavaScript.png' },
    ]
  }
];

// Ajoute dynamiquement chaque section au DOM
skillSections.forEach(section => {
  skillsSection.appendChild(createSkillSection(section.title, section.skills));
});