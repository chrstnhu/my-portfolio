import { useLanguage } from "../context/LanguageContext";

function Home() {
  const { t } = useLanguage();

  function goToSection(section) {
    window.location.hash = section;
  }

  return (
    <section id="home">
      <div className="sticky top-16 z-10 h-[55vh] w-full overflow-hidden">
        <img
          src="/assets/background/paysage.jpg"
          alt="Paysage background"
          className="absolute left-0 top-0 h-full w-screen object-cover opacity-40 blur-sm"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-2 items-center gap-6 p-10">
          <div>
            <h1 className="text-4xl font-bold text-blue-900">{t("welcome")}</h1>

            <h2 className="text-2xl font-semibold text-blue-700">
              {t("name")}
            </h2>

            <p className="text-lg text-slate-700">{t("tagline")}</p>
          </div>

          <div className="flex items-end justify-end">
            <button
              onClick={() => goToSection("about")}
              className="rounded bg-blue-500 px-6 py-2 text-white shadow transition hover:bg-blue-600"
            >
              {t("aboutBtn")}
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-20 h-[50vh] w-full">
        <div className="absolute left-0 top-0 h-full w-screen bg-white" />

        <img
          src="/assets/background/skills-img.jpg"
          alt="Skills"
          className="absolute left-0 top-0 h-full w-screen object-cover opacity-30"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-2 items-center gap-6 p-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              {t("skills")}
            </h3>

            <p className="text-lg text-slate-700">{t("skillsPreview")}</p>
          </div>

          <div className="flex items-end justify-end">
            <button
              onClick={() => goToSection("skills")}
              className="rounded bg-blue-500 px-6 py-2 text-white shadow transition hover:bg-blue-600"
            >
              {t("skillsBtn")}
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-30 h-[50vh] w-full">
        <div className="absolute left-0 top-0 h-full w-screen bg-white" />

        <img
          src="/assets/background/project-img.jpg"
          alt="Projects"
          className="absolute left-0 top-0 h-full w-screen object-cover opacity-30"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-2 items-center gap-6 p-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              {t("projects")}
            </h3>

            <p className="text-lg text-slate-700">{t("projectsPreview")}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => goToSection("projects")}
              className="rounded bg-blue-500 px-6 py-2 text-white shadow transition hover:bg-blue-600"
            >
              {t("projectsBtn")}
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-40 h-[50vh] w-full">
        <div className="absolute left-0 top-0 h-full w-screen bg-white" />

        <img
          src="/assets/background/contact-img.jpg"
          alt="Contact"
          className="absolute left-0 top-0 h-full w-screen object-cover opacity-30"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-2 items-center gap-6 p-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              {t("contact")}
            </h3>

            <p className="text-lg text-slate-700">{t("contactPreview")}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => goToSection("contact")}
              className="rounded bg-blue-500 px-6 py-2 text-white shadow transition hover:bg-blue-600"
            >
              {t("contactBtn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
