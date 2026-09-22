function QualityIcon({ quality }) {
  const isAdaptability = quality.qualityKey === "qualities.adaptability";

  const isCollaboration = quality.qualityKey === "qualities.collaboration";

  const isLearning = quality.qualityKey === "qualities.autonomousLearning";

  const isFlexibility = quality.qualityKey === "qualities.flexibility";

  const isCreativity = quality.qualityKey === "qualities.creativity";

  const isOpenMinded = quality.qualityKey === "qualities.openMinded";

  return (
    <div className="relative flex h-7 w-7 items-center justify-center">
      {/* =========================
          MAIN EMOJI
      ========================== */}
      <span
        className="
          relative
          z-10
          text-lg
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {quality.emoji}
      </span>

      {/* =========================
          🔄 ADAPTABILITY
          Rotating circle
      ========================== */}
      {isAdaptability && (
        <span
          className="
            pointer-events-none
            absolute
            inset-[-4px]
            rounded-full
            border
            border-blue-300
            opacity-0
            transition-all
            duration-500
            group-hover:rotate-180
            group-hover:scale-110
            group-hover:opacity-100
            dark:border-blue-400
          "
        />
      )}

      {/* =========================
          🤝 COLLABORATION
          Two people moving closer
      ========================== */}
      {isCollaboration && (
        <>
          <span
            className="
              pointer-events-none
              absolute
              left-0
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              opacity-0
              transition-all
              duration-500
              group-hover:left-[-5px]
              group-hover:opacity-100
              dark:bg-emerald-300
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              right-0
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              opacity-0
              transition-all
              duration-500
              group-hover:right-[-5px]
              group-hover:opacity-100
              dark:bg-emerald-300
            "
          />
        </>
      )}

      {/* =========================
          📚 AUTONOMOUS LEARNING
          Rising star
      ========================== */}
      {isLearning && (
        <>
          <span
            className="
              pointer-events-none
              absolute
              -right-1
              -top-1
              text-[8px]
              text-violet-400
              opacity-0
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:opacity-100
              dark:text-violet-300
            "
          >
            ✦
          </span>

          <span
            className="
              pointer-events-none
              absolute
              -left-1
              top-0
              text-[6px]
              text-violet-300
              opacity-0
              transition-all
              delay-100
              duration-300
              group-hover:-translate-y-1
              group-hover:opacity-100
              dark:text-violet-200
            "
          >
            •
          </span>
        </>
      )}

      {/* =========================
          🔀 FLEXIBILITY
          Rotating circle
      ========================== */}
      {isFlexibility && (
        <span
          className="
            pointer-events-none
            absolute
            inset-[-4px]
            rounded-full
            border
            border-blue-300
            opacity-0
            transition-all
            duration-500
            group-hover:rotate-180
            group-hover:scale-110
            group-hover:opacity-100
            dark:border-blue-400
          "
        />
      )}

      {/* =========================
          💡 CREATIVITY
          Sparkles
      ========================== */}
      {isCreativity && (
        <>
          <span
            className="
              pointer-events-none
              absolute
              -right-1
              -top-1
              text-[9px]
              text-pink-400
              opacity-0
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:opacity-100
              dark:text-pink-300
            "
          >
            ✦
          </span>

          <span
            className="
              pointer-events-none
              absolute
              -bottom-1
              -left-1
              text-[7px]
              text-pink-300
              opacity-0
              transition-all
              delay-100
              duration-300
              group-hover:translate-y-1
              group-hover:opacity-100
              dark:text-pink-200
            "
          >
            ✦
          </span>

          <span
            className="
              pointer-events-none
              absolute
              -right-2
              top-1/2
              text-[5px]
              text-pink-300
              opacity-0
              transition-all
              delay-150
              duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
              dark:text-pink-200
            "
          >
            •
          </span>
        </>
      )}

      {/* =========================
          🌟 OPEN-MINDEDNESS
          Opening circle
      ========================== */}
      {isOpenMinded && (
        <span
          className="
            pointer-events-none
            absolute
            inset-[-5px]
            rounded-full
            border
            border-orange-200
            opacity-0
            transition-all
            duration-500
            group-hover:scale-125
            group-hover:opacity-100
            dark:border-orange-300
          "
        />
      )}
    </div>
  );
}

export default QualityIcon;
