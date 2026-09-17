import SkillSection from "../components/SkillSection";
import { skillSections } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <h1>{t("skills")}</h1>

      <p>{t("skillsPreview")}</p>

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
