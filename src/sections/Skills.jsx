import SkillSection from "../components/SkillSection";
import { skillSections } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24"
    >
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {t("skillsTitle")}
        </h1>

        <div className="mt-5 h-1 w-12 rounded-full bg-blue-600" />

        <p className="text-lg text-slate-500 dark:text-slate-400">
          {t("skillsIntro")}
        </p>
      </div>

      {skillSections.map((section) => (
        <SkillSection
          key={section.titleKey}
          title={t(section.titleKey)}
          skills={section.skills}
        />
      ))}
    </section>
  );
}

export default Skills;
