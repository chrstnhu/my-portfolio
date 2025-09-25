const aboutSection = document.querySelector('#about');

// Create hobby item component
function createHobbyItem(emoji, translationKey, colorClass) {
  const item = document.createElement('div');
  item.className = `flex flex-col items-center p-3 bg-gradient-to-br ${colorClass} rounded-lg border hover:shadow-sm transition-shadow duration-200`;
  
  const emojiDiv = document.createElement('div');
  emojiDiv.className = 'text-xl mb-1';
  emojiDiv.textContent = emoji;
  
  const label = document.createElement('span');
  label.className = `text-xs font-medium text-center`;
  label.textContent = t(translationKey);
  
  item.appendChild(emojiDiv);
  item.appendChild(label);
  
  return item;
}

// Create quality card component
function createQualityCard(emoji, qualityKey, detailKey, colorClass) {
  const card = document.createElement('div');
  card.className = `bg-gradient-to-br ${colorClass} p-4 rounded-lg border text-center hover:shadow-md transition-all duration-200 group cursor-pointer h-32 flex flex-col justify-between`;
  
  const emojiDiv = document.createElement('div');
  emojiDiv.className = 'text-2xl mb-1';
  emojiDiv.textContent = emoji;
  
  const title = document.createElement('div');
  title.className = `text-sm font-medium mb-1`;
  title.textContent = t(qualityKey);
  
  const detail = document.createElement('div');
  detail.className = `text-xs leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-8 flex items-center justify-center text-center`;
  detail.textContent = t(detailKey);
  
  card.appendChild(emojiDiv);
  card.appendChild(title);
  card.appendChild(detail);
  
  return card;
}

// Create main container
function createMainContainer() {
  const container = document.createElement('div');
  container.className = 'bg-slate-50 rounded-xl shadow-xl p-8 flex flex-col items-start relative';
  
  // Title
  const title = document.createElement('h1');
  title.className = 'text-4xl font-bold text-gray-800 mb-6';
  title.textContent = t('aboutTitle');
  container.appendChild(title);
  
  return container;
}

// Create intro section
function createIntroSection() {
  const introBlock = document.createElement('div');
  introBlock.className = 'bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg';
  
  const introPara = document.createElement('p');
  introPara.className = 'text-lg text-blue-800 font-medium leading-relaxed mb-4';
  introPara.textContent = t('aboutIntroExtended');
  
  const internshipPara = document.createElement('p');
  internshipPara.className = 'text-lg text-blue-800 font-medium leading-relaxed';
  internshipPara.textContent = t('aboutInternship');
  
  introBlock.appendChild(introPara);
  introBlock.appendChild(internshipPara);
  
  return introBlock;
}

// Create hobbies section
function createHobbiesSection() {
  const hobbiesBlock = document.createElement('div');
  hobbiesBlock.className = 'bg-white rounded-lg p-6 shadow-md mb-6';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold mb-4 text-gray-800';
  title.textContent = t('hobbies');
  
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3';
  
  // Add hobby items
  const hobbies = [
    { emoji: '🎨', key: 'hobbyList.drawing', color: 'from-red-50 to-red-100 border-red-200' },
    { emoji: '✈️', key: 'hobbyList.traveling', color: 'from-blue-50 to-blue-100 border-blue-200' },
    { emoji: '🧩', key: 'hobbyList.puzzles', color: 'from-purple-50 to-purple-100 border-purple-200' },
    { emoji: '🎵', key: 'hobbyList.listeningMusic', color: 'from-green-50 to-green-100 border-green-200' },
    { emoji: '🎮', key: 'hobbyList.playingGames', color: 'from-orange-50 to-orange-100 border-orange-200' }
  ];
  
  hobbies.forEach(hobby => {
    grid.appendChild(createHobbyItem(hobby.emoji, hobby.key, hobby.color));
  });
  
  hobbiesBlock.appendChild(title);
  hobbiesBlock.appendChild(grid);
  
  return hobbiesBlock;
}

// Create qualities section
function createQualitiesSection() {
  const qualitiesBlock = document.createElement('div');
  qualitiesBlock.className = 'bg-white rounded-lg p-6 shadow-md mb-6';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold mb-4 text-gray-800';
  title.textContent = t('personalQualities');
  
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  
  // Add quality cards
  const qualities = [
    { emoji: '🔄', qualityKey: 'qualities.adaptability', detailKey: 'qualityDetails.adaptability', color: 'from-blue-50 to-blue-100 border-blue-200' },
    { emoji: '🤝', qualityKey: 'qualities.collaboration', detailKey: 'qualityDetails.collaboration', color: 'from-green-50 to-green-100 border-green-200' },
    { emoji: '📚', qualityKey: 'qualities.autonomousLearning', detailKey: 'qualityDetails.autonomousLearning', color: 'from-purple-50 to-purple-100 border-purple-200' },
    { emoji: '🔀', qualityKey: 'qualities.flexibility', detailKey: 'qualityDetails.flexibility', color: 'from-orange-50 to-orange-100 border-orange-200' },
    { emoji: '💡', qualityKey: 'qualities.creativity', detailKey: 'qualityDetails.creativity', color: 'from-pink-50 to-pink-100 border-pink-200' },
    { emoji: '🌟', qualityKey: 'qualities.openMinded', detailKey: 'qualityDetails.openMinded', color: 'from-teal-50 to-teal-100 border-teal-200' }
  ];
  
  qualities.forEach(quality => {
    grid.appendChild(createQualityCard(quality.emoji, quality.qualityKey, quality.detailKey, quality.color));
  });
  
  qualitiesBlock.appendChild(title);
  qualitiesBlock.appendChild(grid);
  
  return qualitiesBlock;
}

// Global variables to be able to replay animations
let aboutBlocks = [];

// Function called each time we navigate to About
function initAbout() {
  loadAbout();
  initPageAnimation(aboutBlocks, {
    animationOptions: { betweenDelay: 300 }
  });
}

// Load About content with animations
function loadAbout() {
  aboutSection.innerHTML = '';
  aboutSection.classList.add('pt-16');

  // Create main container
  const container = createMainContainer();
  aboutSection.appendChild(container);

  // Create and add sections
  const introSection = createIntroSection();
  const hobbiesSection = createHobbiesSection();
  const qualitiesSection = createQualitiesSection();

  container.appendChild(introSection);
  container.appendChild(hobbiesSection);
  container.appendChild(qualitiesSection);

  aboutBlocks = [introSection, hobbiesSection, qualitiesSection];
  prepareElementsForAnimation(aboutBlocks, { duration: 800 });
  startSequentialFadeIn(aboutBlocks, { betweenDelay: 300 });
}