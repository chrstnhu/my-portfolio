function SkillCard({ skill }) {
  return (
    <div
      className="
        group
        flex
        h-28
        w-28
        flex-col
        items-center
        justify-between
        rounded-xl
        border
        border-slate-200
        bg-white
        p-3
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-sm
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-blue-500/50
        dark:hover:shadow-blue-900/20
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-lg
          bg-slate-50
          p-2
          text-2xl
          transition-all
          duration-200
          group-hover:scale-105
          group-hover:bg-blue-50
          dark:bg-slate-700
          dark:group-hover:bg-blue-950/50
        "
      >
        {skill.img ? (
          <img
            src={skill.img}
            alt={skill.name}
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-200
              group-hover:scale-105
            "
          />
        ) : (
          <span
            aria-hidden="true"
            className="
              transition-transform
              duration-200
              group-hover:scale-110
            "
          >
            {skill.icon}
          </span>
        )}
      </div>

      {/* Name */}
      <span
        className="
          text-center
          text-xs
          font-medium
          text-slate-700
          transition-colors
          duration-200
          group-hover:text-blue-600
          dark:text-slate-200
          dark:group-hover:text-blue-400
        "
      >
        {skill.name}
      </span>
    </div>
  );
}

export default SkillCard;
