const projectsSection = document.querySelector('#projects');

// Create the main card container
function createCardContainer() {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'rounded-xl', 'shadow-xl', 'p-6', 'mb-8', 'mt-8', 'flex', 'flex-col', 'items-stretch', 'transition-all', 'duration-300', 'hover:shadow-2xl', 'hover:-translate-y-1');
  return card;
}

// Create the image section of the card
function createImageSection(img, title) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('w-full', 'h-64', 'flex', 'items-center', 'justify-center', 'bg-gray-50', 'rounded-lg', 'mb-4', 'overflow-hidden');
  
  const image = document.createElement('img');
  image.src = img;
  image.alt = title;
  image.classList.add('max-w-full', 'max-h-full', 'object-contain', 'rounded-lg');
  
  imageContainer.appendChild(image);
  return imageContainer;
}

// Create the title element
function createTitle(title) {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  h2.classList.add('text-xl', 'font-semibold', 'mb-4', 'text-gray-800');
  return h2;
}

// Create the description element
function createDescription(description) {
  const desc = document.createElement('p');
  desc.textContent = description;
  desc.classList.add('text-gray-600', 'text-sm');
  return desc;
}

// Create the view details button
function createViewButton(link) {
  if (!link) return null;
  
  const btn = document.createElement('a');
  btn.textContent = t('viewDetails');
  btn.href = link;
  btn.classList.add('bg-blue-600', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'font-semibold', 'text-center', 'transition-colors', 'duration-200', 'hover:bg-blue-700', 'inline-block', 'no-underline');
  btn.target = '_blank';
  return btn;
}

// Create the content section (title, description, button)
function createContentSection(title, description, link) {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('flex', 'flex-row', 'justify-between', 'items-center', 'p-4');

  const textDiv = document.createElement('div');
  textDiv.classList.add('flex', 'flex-col', 'gap-2');
  
  textDiv.appendChild(createTitle(title));
  textDiv.appendChild(createDescription(description));
  
  contentDiv.appendChild(textDiv);
  
  const button = createViewButton(link);
  if (button) {
    contentDiv.appendChild(button);
  }
  
  return contentDiv;
}

// Main function to create a complete project card
function createProjectCard({ title, descriptionKey, img, link }) {
  const card = createCardContainer();
  const imageSection = createImageSection(img, title);
  const description = t(descriptionKey); // Translate dynamically
  const contentSection = createContentSection(title, description, link);
  
  card.appendChild(imageSection);
  card.appendChild(contentSection);
  
  return card;
}

// Global variables to be able to replay animations
let projectCards = [];

// Function called each time we navigate to Projects
function initProjects() {
  loadProjects();
  initPageAnimation(projectCards, {
    animationOptions: { betweenDelay: 150 }
  });
}

// Load Projects content with animations
function loadProjects() {
  projectsSection.innerHTML = '';
  projectsSection.classList.add('pt-16');

  const projectsList = document.createElement('div');
  projectsList.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8', 'mb-8');
  projectsSection.appendChild(projectsList);

  projectCards = [];
  
  projectsData.slice().reverse().forEach(project => {
    const card = createProjectCard(project);
    projectsList.appendChild(card);
    projectCards.push(card);
  });

  prepareElementsForAnimation(projectCards, { duration: 700 });
  startSequentialFadeIn(projectCards, { betweenDelay: 150 });
}

const projectsData = [
      {
        title: 'libft',
        descriptionKey: 'projectDescriptions.libft',
        img: 'assets/projects/libft.jpg',
        link: 'https://github.com/chrstnhu/libft_library'
      },
      {
        title: 'get-next-line',
        descriptionKey: 'projectDescriptions.getNextLine',
        img: 'assets/projects/get-next-line.png',
        link: 'https://github.com/chrstnhu/get-next-line'
      },
      {
        title: 'ft_printf',
        descriptionKey: 'projectDescriptions.ftPrintf',
        img: 'assets/projects/ft_printf.png',
        link: 'https://github.com/chrstnhu/ft_printf'
      },
      {
        title: 'Born2beroot',
        descriptionKey: 'projectDescriptions.born2beroot',
        img: 'assets/projects/VirtualBox.png'
      },
      {
        title: 'push_swap',
        descriptionKey: 'projectDescriptions.pushSwap',
        img: 'assets/projects/push_swap.png',
        link: 'https://github.com/chrstnhu/push_swap'
      },
      {
        title: 'so_long',
        descriptionKey: 'projectDescriptions.soLong',
        img: 'assets/projects/so_long.png',
        link: 'https://github.com/chrstnhu/so_long'
      },
      {
        title: 'pipex',
        descriptionKey: 'projectDescriptions.pipex',
        img: 'assets/projects/Pipex.png',
        link: 'https://github.com/chrstnhu/pipex'
      },
      {
        title: 'philosophers',
        descriptionKey: 'projectDescriptions.philosophers',
        img: 'assets/projects/philosophers.png',
        link: 'https://github.com/chrstnhu/philosophers'
      },
      {
        title: 'minishell',
        descriptionKey: 'projectDescriptions.minishell',
        img: 'assets/projects/minishell.png',
        link: 'https://github.com/chrstnhu/minishell'
      },
      {
        title: 'NetPractice',
        descriptionKey: 'projectDescriptions.netPractice',
        img: 'assets/projects/NetPractice.png',
        link: 'https://github.com/chrstnhu/net-practice'
      },
      {
        title: 'cub3d',
        descriptionKey: 'projectDescriptions.cub3d',
        img: 'assets/projects/cub3D.png',
        link: 'https://github.com/chrstnhu/cub3d'
      },
      {
        title: 'CPP Modules',
        descriptionKey: 'projectDescriptions.cppModules',
        img: 'assets/projects/C++.png',
        link: 'https://github.com/chrstnhu/CPP-Module'
      },
      {
        title: 'inception',
        descriptionKey: 'projectDescriptions.inception',
        img: 'assets/projects/Docker.png',
        link: 'https://github.com/chrstnhu/inception'
      },
      {
        title: 'ft_irc',
        descriptionKey: 'projectDescriptions.ftIrc',
        img: 'assets/projects/ft_irc.png',
        link: 'https://github.com/chrstnhu/ft_irc'
      },
      {
        title: 'ft_transcendence',
        descriptionKey: 'projectDescriptions.ftTranscendence',
        img: 'assets/projects/ft_transcendence.png',
        link: 'https://github.com/chrstnhu/ft_transcendence'
      }
    ];

// Initialize content
loadProjects();
