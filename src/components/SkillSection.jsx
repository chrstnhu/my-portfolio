import SkillCard from "./SkillCard";

function SkillSection({ title, skills }) {
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section
      className="
        mb-12
        rounded-2xl
        border
        border-slate-200
        bg-slate-50/80
        p-6
        shadow-lg
        backdrop-blur-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      <h2
        className="
          mb-6
          text-2xl
          font-bold
          tracking-tight
          text-slate-800
        "
      >
        {title}
      </h2>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
          md:justify-start
        "
      >
        {sortedSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
