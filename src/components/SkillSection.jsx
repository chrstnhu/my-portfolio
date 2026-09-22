import SkillCard from "./SkillCard";

function SkillSection({ title, skills }) {
  const sortedSkills = [...skills].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section>
      {/* Section title */}
      <div className="mb-6 flex items-center gap-4">
        <div
          className="
            h-8
            w-1
            rounded-full
            bg-blue-600
            dark:bg-blue-500
          "
        />

        <h2
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-slate-900
            dark:text-slate-100
          "
        >
          {title}
        </h2>

        <div
          className="
            h-px
            flex-1
            bg-slate-200
            dark:bg-slate-700
          "
        />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {sortedSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
