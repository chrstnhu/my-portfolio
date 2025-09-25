const aboutSection = document.querySelector('#about');

// Load About content
function loadAbout() {
  aboutSection.innerHTML = '';
  aboutSection.classList.add('pt-16');

  aboutSection.innerHTML += `
    <div class="bg-slate-50 rounded-xl shadow-xl p-8 mb-10 flex flex-col items-start relative">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">${t('aboutTitle')}</h1>
      <p class="text-lg text-gray-700 mb-6">${t('aboutIntro')}</p>
      <div class="bg-white rounded-lg p-6 shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">${t('technicalSkills')}</h2>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>${t('languages')}</li>
          <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>${t('frameworks')}</li>
          <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>${t('tools')}</li>
        </ul>
      </div>
      <p class="text-lg text-gray-700">${t('aboutGoal')}</p>
    </div>
  `;
}

// Initialize content
loadAbout();
