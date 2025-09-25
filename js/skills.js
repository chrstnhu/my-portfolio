const skillsSection = document.querySelector('#skills');

// Load Skills content
function loadSkills() {
  skillsSection.innerHTML = '';
  skillsSection.classList.add('pt-16');
  skillSections.forEach(section => {
    skillsSection.appendChild(createSkillSection(section.title, section.skills));
  });
}

function createSkillSection(title, skills = []) {
    const section = document.createElement('section');
    section.classList.add('bg-slate-50', 'rounded-xl', 'shadow-xl', 'p-8', 'mb-10', 'flex', 'flex-col', 'items-start', 'relative', 'transition-all', 'duration-300', 'hover:shadow-2xl', 'hover:-translate-y-1', 'hover:bg-slate-100');

    const header = document.createElement('h2');
    header.classList.add('text-2xl', 'font-bold', 'mb-6', 'text-gray-800');
    header.textContent = title;
    section.appendChild(header);

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('flex', 'flex-wrap', 'gap-4', 'mb-8', 'mt-8');

    const sortedSkills = skills.sort((a, b) => a.name.localeCompare(b.name));

    for (let skill of sortedSkills) {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('bg-blue-200', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'items-center', 'justify-between', 'min-w-[8.75rem]', 'min-h-[8.75rem]', 'w-[8.75rem]', 'h-[8.75rem]', 'border-2', 'border-blue-300', 'shadow-md', 'transition-all', 'duration-200', 'hover:bg-blue-300', 'hover:border-blue-400', 'hover:shadow-xl');

      const img = document.createElement('img');
      img.src = skill.img;
      img.alt = skill.name;
      img.classList.add('w-12', 'h-12', 'object-contain', 'mb-2');
    
      const name = document.createElement('span');
      name.classList.add('text-xs', 'text-center', 'leading-5', 'break-words', 'px-1', 'text-gray-800', 'font-medium');
      name.textContent = skill.name;

      skillDiv.appendChild(img);
      skillDiv.appendChild(name);
      skillsContainer.appendChild(skillDiv);
    }

    section.appendChild(skillsContainer);
    return section;
  }

  
const skillSections = [
    {
      title: t('skillsCategories.languages'),
      skills: [
        { name: 'C', img: 'assets/skills/C.png' },
        { name: 'C++', img: 'assets/skills/C++.png' },
        { name: 'Python', img: 'assets/skills/Python.png' },
        { name: 'JavaScript', img: 'assets/skills/JavaScript.png' },
        { name: 'TypeScript', img: 'assets/skills/TypeScript.png' },
        { name: 'HTML5', img: 'assets/skills/HTML5.png' },
        { name: 'CSS3', img: 'assets/skills/CSS3.png' }
      ]
    },
    {
      title: t('skillsCategories.frameworks'),
      skills: [
        { name: 'Tailwind CSS', img: 'assets/skills/Tailwind CSS.png' }
      ]
    },
    {
      title: t('skillsCategories.environments'),
      skills: [
        { name: 'Linux', img: 'assets/skills/Linux.png' },
        { name: 'Docker', img: 'assets/skills/Docker.png' },
        { name: 'VirtualBox', img: 'assets/skills/VirtualBox.png' }
      ]
    },
    {
      title: t('skillsCategories.editors'),
      skills: [
        { name: 'VS Code', img: 'assets/skills/Visual Studio Code (VS Code).png' },
        { name: 'nano', img: 'assets/skills/Nano.png' },
        { name: 'vim', img: 'assets/skills/Vim.png' },
        { name: 'Git', img: 'assets/skills/Git.png' },
        { name: 'GitHub', img: 'assets/skills/GitHub.png' },
        { name: 'Notion', img: 'assets/skills/Notion.png' }
      ]
    },
    {
      title: t('skillsCategories.utilities'),
      skills: [
        { name: 'GIMP', img: 'assets/skills/GIMP.png' },
        { name: 'Audacity', img: 'assets/skills/Audacity.png' },
        { name: 'Aegisub', img: 'assets/skills/Aegisub.png' },
        { name: 'Microsoft Office', img: 'assets/skills/Packoffice.png' }
      ]
    }
  ];

// Initialize content
loadSkills();