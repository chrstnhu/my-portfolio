import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { skillSections } from "../data/skills";
import SkillSection from "../components/SkillSection";

function Skills() {
  const { t } = useLanguage();

  // "all" = afficher toutes les compétences
  const [activeFilter, setActiveFilter] = useState("all");

  // Sections à afficher
  const visibleSections =
    activeFilter === "all"
      ? skillSections
      : skillSections.filter((section) => section.titleKey === activeFilter);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* =========================
            HEADER
        ========================== */}
        <div className="mb-10 max-w-2xl">
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
              sm:text-5xl
            "
          >
            {t("skillsTitle")}
          </h1>

          <div
            className="
              mt-5
              h-1
              w-12
              rounded-full
              bg-blue-600
              dark:bg-blue-500
            "
          />

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-500
              dark:text-slate-400
            "
          >
            {t("skillsIntro")}
          </p>
        </div>

        {/* =========================
            FILTERS
        ========================== */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {/* TOUS */}
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  activeFilter === "all"
                    ? `
                      border-blue-600
                      bg-blue-600
                      text-white
                      shadow-sm
                      hover:bg-blue-700
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-600
                      hover:border-blue-300
                      hover:text-blue-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-300
                      dark:hover:border-blue-500
                      dark:hover:text-blue-400
                    `
                }
              `}
            >
              {t("filters.all")}
            </button>

            {/* CATEGORIES */}
            {skillSections.map((section) => {
              const isActive = activeFilter === section.titleKey;

              return (
                <button
                  key={section.titleKey}
                  type="button"
                  onClick={() => setActiveFilter(section.titleKey)}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          border-blue-600
                          bg-blue-600
                          text-white
                          shadow-sm
                          hover:bg-blue-700
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-blue-300
                          hover:text-blue-600
                          dark:border-slate-700
                          dark:bg-slate-800
                          dark:text-slate-300
                          dark:hover:border-blue-500
                          dark:hover:text-blue-400
                        `
                    }
                  `}
                >
                  {t(section.titleKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================
            SKILLS
        ========================== */}
        <div className="space-y-12">
          {visibleSections.map((section) => (
            <SkillSection
              key={section.titleKey}
              title={t(section.titleKey)}
              skills={section.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
