const homeSection = document.querySelector('#home');

// Load Home content
function loadHome() {

const aboutReview = document.createElement('div');
aboutReview.className = 'sticky top-16 w-full h-[55vh] z-10 overflow-hidden';
aboutReview.innerHTML = `
    <img src="assets/background/paysage.jpg" alt="Paysage background" class="absolute left-0 top-0 w-screen h-full object-cover opacity-40 blur-sm" aria-hidden="true" />
    <div class="relative z-10 p-10 grid grid-cols-2 items-center gap-6">
        <div>
            <h1 class="text-4xl font-bold text-blue-900">${t('welcome')}</h1>
            <h2 class="text-2xl font-semibold text-blue-700">${t('name')}</h2>
            <p class="text-lg text-slate-700">${t('tagline')}</p>
        </div>
        <div class="flex justify-end items-end">
            <button onclick="history.pushState(null, '', '#about'); showPage('#about')" class="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition">${t('aboutBtn')}</button>
        </div>
    </div>
`;

homeSection.appendChild(aboutReview);

// Review Skills
const skillsReview = document.createElement('div');
skillsReview.className = 'sticky top-14 w-full h-[50vh] z-20';
skillsReview.innerHTML = `
    <div class="absolute left-0 top-0 w-screen h-full bg-white"></div>
    <img src="assets/background/skills-img.jpg" alt="Skills" class="absolute left-0 top-0 w-screen h-full object-cover opacity-30" aria-hidden="true" />
    <div class="relative z-10 p-10 grid grid-cols-2 items-center gap-6">
        <div>
            <h3 class="text-xl font-semibold text-blue-800">${t('skills')}</h3>
            <p class="text-lg text-slate-700">${t('skillsPreview')}</p>
        </div>
        <div class="flex justify-end items-end">
            <button onclick="history.pushState(null, '', '#skills'); showPage('#skills')" class="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition">${t('skillsBtn')}</button>
        </div>
    </div>
`;
homeSection.appendChild(skillsReview);

// Review Projects
const projectsReview = document.createElement('div');
projectsReview.className = 'sticky top-14 w-full h-[50vh] z-30';
projectsReview.innerHTML = `
    <div class="absolute left-0 top-0 w-screen h-full bg-white"></div>
    <img src="assets/background/project-img.jpg" alt="Projects" class="absolute left-0 top-0 w-screen h-full object-cover opacity-30" aria-hidden="true" />
    <div class="relative z-10 p-10 grid grid-cols-2 items-center gap-6">
        <div>
            <h3 class="text-xl font-semibold text-blue-800">${t('projects')}</h3>
            <p class="text-lg text-slate-700">${t('projectsPreview')}</p>
        </div>
        <div class="flex justify-end">
            <button onclick="history.pushState(null, '', '#projects'); showPage('#projects')" class="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition">${t('projectsBtn')}</button>
        </div>
    </div>
`;
homeSection.appendChild(projectsReview);

// Review Contact
const contactReview = document.createElement('div');
contactReview.className = 'sticky top-14 w-full h-[50vh] z-40';
contactReview.innerHTML = `
    <div class="absolute left-0 top-0 w-screen h-full bg-white"></div>
    <img src="assets/background/contact-img.jpg" alt="Contact" class="absolute left-0 top-0 w-screen h-full object-cover opacity-30" aria-hidden="true" />
    <div class="relative z-10 p-10 grid grid-cols-2 items-center gap-6">
        <div>
            <h3 class="text-xl font-semibold text-blue-800">${t('contact')}</h3>
            <p class="text-lg text-slate-700">${t('contactPreview')}</p>
        </div>
        <div class="flex justify-end">
            <button onclick="history.pushState(null, '', '#contact'); showPage('#contact')" class="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition">${t('contactBtn')}</button>
        </div>
    </div>
`;
homeSection.appendChild(contactReview);
}

// Initialize content
loadHome();