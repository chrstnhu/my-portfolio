const homeSection = document.querySelector('#home');

homeSection.innerHTML = `
    <h1>Welcome to my portfolio!</h1>
    <h2>Christine HU</h2>
    <p>Passionate developer crafting innovative solutions through code</p>
`;

// Review About
const aboutReview = document.createElement('div');
aboutReview.classList.add('home-review');
aboutReview.innerHTML = `
    <h3>About Me</h3>
    <p>Hello! I am Chrhu, a web developer passionate about creating SPA portfolios and interactive web apps.</p>
    <button onclick="history.pushState(null, '', '#about'); showPage('#about')" class="bg-blue-500 text-white py-2 px-4 rounded">About</button>
`;
homeSection.appendChild(aboutReview);

// Review Skills
const skillsReview = document.createElement('div');
skillsReview.classList.add('home-review');
skillsReview.innerHTML = `
    <h3>Skills</h3>
    <p>HTML, CSS, JS, TypeScript, Tailwind, VS Code, GitHub...</p>
    <button onclick="history.pushState(null, '', '#skills'); showPage('#skills')" class="bg-blue-500 text-white py-2 px-4 rounded">Skills</button>
`;
homeSection.appendChild(skillsReview);

// Review Projects
const projectsReview = document.createElement('div');
projectsReview.classList.add('home-review');
projectsReview.innerHTML = `
    <h3>Projects</h3>
    <p>Discover my latest web projects and applications.</p>
    <button onclick="history.pushState(null, '', '#projects'); showPage('#projects')" class="bg-blue-500 text-white py-2 px-4 rounded">Projects</button>
`;
homeSection.appendChild(projectsReview);

// Review Contact
const contactReview = document.createElement('div');
contactReview.classList.add('home-review');
contactReview.innerHTML = `
    <h3>Contact</h3>
    <p>Get in touch for collaborations or questions.</p>
    <button onclick="history.pushState(null, '', '#contact'); showPage('#contact')" class="bg-blue-500 text-white py-2 px-4 rounded">Contact</button>
`;
homeSection.appendChild(contactReview);