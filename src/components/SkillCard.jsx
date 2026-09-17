function SkillCard({ skill }) {
  return (
    <div
      className="
        group
        flex
        h-36
        w-36
        flex-col
        items-center
        justify-between
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-300
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-xl
          bg-slate-50
          p-2
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="h-full w-full object-contain"
        />
      </div>

      <span
        className="
          text-center
          text-sm
          font-medium
          text-slate-700
        "
      >
        {skill.name}
      </span>
    </div>
  );
}

export default SkillCard;
