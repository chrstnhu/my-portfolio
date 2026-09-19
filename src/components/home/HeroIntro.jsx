import { useLanguage } from "../../context/LanguageContext";

function HeroIntro() {
  const { t } = useLanguage();

  function goToSection(section) {
    window.location.hash = section;
  }

  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Portfolio
      </p>

      <h1 className="mb-3 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        {t("name")}
      </h1>

      <h2 className="mb-6 text-2xl font-medium text-slate-700 sm:text-3xl">
        {t("welcome")}
      </h2>

      <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
        {t("tagline")}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => goToSection("about")}
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t("aboutBtn")}
          <span aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          onClick={() => goToSection("projects")}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t("projectsBtn")}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export default HeroIntro;
