// Translations dictionary
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    
    // Home page
    welcome: "Welcome to my portfolio!",
    name: "Christine HU",
    tagline: "Passionate developer crafting innovative solutions through code",
    aboutBtn: "About",
    skillsBtn: "Skills",
    projectsBtn: "Projects",
    contactBtn: "Contact",
    skillsPreview: "HTML, CSS, JS, TypeScript, Tailwind, VS Code, GitHub...",
    projectsPreview: "Discover my latest web projects and applications.",
    contactPreview: "Get in touch for collaborations or questions.",
    
    // About page
    aboutTitle: "About Me",
    aboutIntro: "Hello! I am Christine, a web developer passionate about creating innovative solutions through code.",
    technicalSkills: "Technical Skills",
    languages: "Languages: HTML, CSS, JavaScript, TypeScript, C, C++, Python",
    frameworks: "Frameworks: Tailwind CSS",
    tools: "Tools: VS Code, Git, GitHub, Docker, VirtualBox",
    aboutGoal: "My goal is to build clean, efficient, and user-friendly websites and applications that solve real-world problems.",
    
    // Skills page
    skillsCategories: {
      languages: "Languages",
      frameworks: "Frameworks & Libraries",
      environments: "Environments & Systems",
      editors: "Editors & IDE & Version Control",
      utilities: "Utilities"
    },
    
    // Projects page
    viewDetails: "View Details",
    projectDescriptions: {
      libft: "My first C library - recreation of libc functions.",
      getNextLine: "Function that reads line by line from a file descriptor.",
      ftPrintf: "Recreation of the printf function from libc.",
      born2beroot: "System administration project with virtual machine.",
      pushSwap: "Sorting algorithm with two stacks and a set of instructions.",
      soLong: "Small 2D game developed with minilibx.",
      pipex: "Recreation of shell pipe mechanism with redirection.",
      philosophers: "Simulation of the philosophers problem with threads and mutex.",
      minishell: "Recreation of a basic shell like bash.",
      netPractice: "Practical network configuration and TCP/IP exercises.",
      cub3d: "3D game engine inspired by Wolfenstein 3D with raycasting.",
      cppModules: "Introduction to object-oriented programming in C++.",
      inception: "Virtualization project with Docker and web services.",
      ftIrc: "IRC server in C++ compatible with standard IRC clients.",
      ftTranscendence: "Complete web application - real-time multiplayer Pong game."
    },
    
    // Contact page
    showEmail: "Show my email",
    hideEmail: "Hide email",
    viewGithub: "View my GitHub",
    viewLinkedin: "View my LinkedIn",
    
    // Footer
    footerTitle: "42Project Portfolio",
    footerDescription: "Showcasing technical expertise and projects from School 42 with presentation.",
    navigate: "Navigate",
    connect: "Connect",
    github: "GitHub",
    mail: "Mail",
    linkedin: "LinkedIn",
    copyright: "© 2025 My Portfolio. All rights reserved."
  },
  
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    
    // Home page
    welcome: "Bienvenue sur mon portfolio !",
    name: "Christine HU",
    tagline: "Développeuse passionnée créant des solutions innovantes par le code",
    aboutBtn: "À propos",
    skillsBtn: "Compétences",
    projectsBtn: "Projets",
    contactBtn: "Contact",
    skillsPreview: "HTML, CSS, JS, TypeScript, Tailwind, VS Code, GitHub...",
    projectsPreview: "Découvrez mes derniers projets web et applications.",
    contactPreview: "Contactez-moi pour des collaborations ou questions.",
    
    // About page
    aboutTitle: "À propos de moi",
    aboutIntro: "Bonjour ! Je suis Christine, une développeuse web passionnée par la création de solutions innovantes par le code.",
    technicalSkills: "Compétences techniques",
    languages: "Langages : HTML, CSS, JavaScript, TypeScript, C, C++, Python",
    frameworks: "Frameworks : Tailwind CSS",
    tools: "Outils : VS Code, Git, GitHub, Docker, VirtualBox",
    aboutGoal: "Mon objectif est de créer des sites web et applications propres, efficaces et conviviaux qui résolvent des problèmes réels.",
    
    // Skills page
    skillsCategories: {
      languages: "Langages",
      frameworks: "Frameworks et Bibliothèques",
      environments: "Environnements et Systèmes",
      editors: "Éditeurs et IDE et Contrôle de Version",
      utilities: "Utilitaires"
    },
    
    // Projects page
    viewDetails: "Voir les détails",
    projectDescriptions: {
      libft: "Ma première bibliothèque C - recréation des fonctions libc.",
      getNextLine: "Fonction qui lit ligne par ligne depuis un descripteur de fichier.",
      ftPrintf: "Recréation de la fonction printf de libc.",
      born2beroot: "Projet d'administration système avec machine virtuelle.",
      pushSwap: "Algorithme de tri avec deux piles et un ensemble d'instructions.",
      soLong: "Petit jeu 2D développé avec minilibx.",
      pipex: "Recréation du mécanisme de pipe shell avec redirection.",
      philosophers: "Simulation du problème des philosophes avec threads et mutex.",
      minishell: "Recréation d'un shell basique comme bash.",
      netPractice: "Exercices pratiques de configuration réseau et TCP/IP.",
      cub3d: "Moteur de jeu 3D inspiré de Wolfenstein 3D avec raycasting.",
      cppModules: "Introduction à la programmation orientée objet en C++.",
      inception: "Projet de virtualisation avec Docker et services web.",
      ftIrc: "Serveur IRC en C++ compatible avec les clients IRC standard.",
      ftTranscendence: "Application web complète - jeu Pong multijoueur en temps réel."
    },
    
    // Contact page
    showEmail: "Afficher mon email",
    hideEmail: "Masquer l'email",
    viewGithub: "Voir mon GitHub",
    viewLinkedin: "Voir mon LinkedIn",
    
    // Footer
    footerTitle: "Portfolio Projets 42",
    footerDescription: "Présentation de l'expertise technique et des projets de l'École 42.",
    navigate: "Naviguer",
    connect: "Se connecter",
    github: "GitHub",
    mail: "Mail",
    linkedin: "LinkedIn",
    copyright: "© 2025 Mon Portfolio. Tous droits réservés."
  },
  
  zh: {
    // Navigation
    home: "首页",
    about: "关于",
    projects: "项目",
    skills: "技能",
    contact: "联系",
    
    // Home page
    welcome: "欢迎来到我的作品集！",
    name: "Christine HU",
    tagline: "热衷于通过代码创造创新解决方案的开发者",
    aboutBtn: "关于",
    skillsBtn: "技能",
    projectsBtn: "项目",
    contactBtn: "联系",
    skillsPreview: "HTML, CSS, JS, TypeScript, Tailwind, VS Code, GitHub...",
    projectsPreview: "探索我最新的网络项目和应用程序。",
    contactPreview: "联系我进行合作或咨询。",
    
    // About page
    aboutTitle: "关于我",
    aboutIntro: "你好！我是Christine HU，一名热衷于通过代码创造创新解决方案的网络开发者。",
    technicalSkills: "技术技能",
    languages: "编程语言：HTML, CSS, JavaScript, TypeScript, C, C++, Python",
    frameworks: "框架：Tailwind CSS",
    tools: "工具：VS Code, Git, GitHub, Docker, VirtualBox",
    aboutGoal: "我的目标是构建干净、高效、用户友好的网站和应用程序，解决现实世界的问题。",
    
    // Skills page
    skillsCategories: {
      languages: "编程语言",
      frameworks: "框架和库",
      environments: "环境和系统",
      editors: "编辑器和IDE和版本控制",
      utilities: "实用工具"
    },
    
    // Projects page
    viewDetails: "查看详情",
    projectDescriptions: {
      libft: "我的第一个C库 - 重建libc函数。",
      getNextLine: "从文件描述符逐行读取的函数。",
      ftPrintf: "重建libc的printf函数。",
      born2beroot: "使用虚拟机的系统管理项目。",
      pushSwap: "使用两个堆栈和一组指令的排序算法。",
      soLong: "使用minilibx开发的小型2D游戏。",
      pipex: "重建带重定向的shell管道机制。",
      philosophers: "使用线程和互斥锁模拟哲学家问题。",
      minishell: "重建像bash一样的基本shell。",
      netPractice: "网络配置和TCP/IP实践练习。",
      cub3d: "受Wolfenstein 3D启发的3D游戏引擎，使用光线投射。",
      cppModules: "C++面向对象编程入门。",
      inception: "使用Docker和网络服务的虚拟化项目。",
      ftIrc: "与标准IRC客户端兼容的C++ IRC服务器。",
      ftTranscendence: "完整的网络应用程序 - 实时多人Pong游戏。"
    },
    
    // Contact page
    showEmail: "显示我的邮箱",
    hideEmail: "隐藏邮箱",
    viewGithub: "查看我的GitHub",
    viewLinkedin: "查看我的LinkedIn",
    
    // Footer
    footerTitle: "42项目作品集",
    footerDescription: "展示来自42学校的技术专长和项目。",
    navigate: "导航",
    connect: "连接",
    github: "GitHub",
    mail: "邮件",
    linkedin: "LinkedIn",
    copyright: "© 2025 我的作品集。保留所有权利。"
  }
};

// Current language (default to English)
let currentLanguage = 'en';

// Function to get a translation
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value || key;
}

// Function to change the language
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateAllTexts();
  }
}

// Function to update all texts
function updateAllTexts() {
  updateNavigation();
  updateFooter();
}

// Functions to update each section
function updateNavigation() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === 'home') link.textContent = t('home');
    else if (href === 'about') link.textContent = t('about');
    else if (href === 'projects') link.textContent = t('projects');
    else if (href === 'skills') link.textContent = t('skills');
    else if (href === 'contact') link.textContent = t('contact');
  });
}

// Update Home Section Reviews
function updateFooter() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `
      <div class="flex justify-between">
        <div>
          <p>${t('footerTitle')}</p>
          <p>${t('footerDescription')}</p>
        </div>
        <div class="flex flex-row gap-6">
          <nav class="flex flex-col">
            <a class="text-xl font-bold">${t('navigate')}</a>
            <a href="#home" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('home')}</a>
            <a href="#about" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('about')}</a>
            <a href="#projects" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('projects')}</a>
            <a href="#skills" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('skills')}</a>
            <a href="#contact" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('contact')}</a>
          </nav>
          <nav class="flex flex-col">
            <a class="text-xl font-bold">${t('connect')}</a>
            <a href="#about" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('github')}</a>
            <a href="#projects" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('mail')}</a>
            <a href="#skills" class="text-white hover:text-gray-300 transition-colors duration-200 no-underline">${t('linkedin')}</a>
          </nav>
        </div>
      </div>
      <p class="mt-8">${t('copyright')}</p>
    `;
  }
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
});