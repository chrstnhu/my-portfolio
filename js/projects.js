const projectsSection = document.querySelector('#projects');

// Fonction pour créer une card projet dynamique
function createProjectCard({ title, description, img, link }) {
  const card = document.createElement('div');
    card.classList.add('project-card');

    // Image full width
    const image = document.createElement('img');
    image.src = img;
    image.alt = title;
    image.classList.add('project-img');
    card.appendChild(image);

    // Titre
    const div = document.createElement('div');
    div.classList.add('project-content', 'flex', 'flex-row', 'justify-between', 'items-center', 'p-4');
    card.appendChild(div);

    const divText = document.createElement('div');
    divText.classList.add('flex', 'flex-col', 'gap-2');
    div.appendChild(divText);
    const h2 = document.createElement('h2');
    h2.textContent = title;
    divText.appendChild(h2);

    // Description
    const desc = document.createElement('p');
    desc.textContent = description;
    divText.appendChild(desc);

    div.appendChild(divText);
    // Bouton View Details
    const btn = document.createElement('a');
    btn.textContent = 'View Details';
    btn.href = link;
    btn.classList.add('project-btn');
    btn.target = '_blank';
    div.appendChild(btn);

    return card;
  }

  // Crée le conteneur grid
  const projectsList = document.createElement('div');
  projectsList.classList.add('projects-list');
  projectsSection.appendChild(projectsList);

  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1.',
      img: 'assets/img/CSS3.png',
      link: 'https://github.com/mon-projet-1'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      img: 'assets/img/JavaScript.png',
      link: 'https://github.com/mon-projet-2'
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3.',
      img: 'assets/img/HTML5.png',
      link: 'https://github.com/mon-projet-3'
    }
  ];

  projects.forEach(project => {
    projectsList.appendChild(createProjectCard(project));
  });
