import { useLanguage } from "../context/LanguageContext";
import HobbyIcon from "../components/HobbyIcon";
import QualityIcon from "../components/QualityIcon";

const hobbies = [
  {
    emoji: "🎨",
    key: "hobbyList.drawing",
    color:
      "bg-pink-50 text-pink-600 border-pink-100 dark:bg-pink-950/40 dark:text-pink-400 dark:border-pink-900",
    rotation: "hover:-rotate-2",
  },
  {
    emoji: "✈️",
    key: "hobbyList.traveling",
    color:
      "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900",
    rotation: "hover:rotate-2",
  },
  {
    emoji: "🧩",
    key: "hobbyList.puzzles",
    color:
      "bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-900",
    rotation: "hover:-rotate-1",
  },
  {
    emoji: "🎵",
    key: "hobbyList.listeningMusic",
    color:
      "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
    rotation: "hover:rotate-1",
  },
  {
    emoji: "🎮",
    key: "hobbyList.playingGames",
    color:
      "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900",
    rotation: "hover:-rotate-2",
  },
];

const qualities = [
  {
    emoji: "🔄",
    qualityKey: "qualities.adaptability",
    detailKey: "qualityDetails.adaptability",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    emoji: "🤝",
    qualityKey: "qualities.collaboration",
    detailKey: "qualityDetails.collaboration",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    emoji: "📚",
    qualityKey: "qualities.autonomousLearning",
    detailKey: "qualityDetails.autonomousLearning",
    color: "text-violet-600 dark:text-violet-400",
  },
  {
    emoji: "🔀",
    qualityKey: "qualities.flexibility",
    detailKey: "qualityDetails.flexibility",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    emoji: "💡",
    qualityKey: "qualities.creativity",
    detailKey: "qualityDetails.creativity",
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    emoji: "🌟",
    qualityKey: "qualities.openMinded",
    detailKey: "qualityDetails.openMinded",
    color: "text-orange-600 dark:text-orange-400",
  },
];

function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="
        bg-white
        px-6
        py-24
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* =========================
            TITLE
        ========================== */}
        <div className="mb-16 max-w-2xl">
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
              sm:text-5xl
            "
          >
            {t("aboutTitle")}

            <span
              className="
                ml-2
                inline-block
                text-blue-500
                dark:text-blue-400
                animate-[wiggle_2s_ease-in-out_infinite]
              "
              aria-hidden="true"
            >
              ✦
            </span>
          </h1>

          <div className="mt-5 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-500" />
        </div>

        {/* =========================
            INTRODUCTION
        ========================== */}
        <div className="mb-20">
          <div
            className="
              relative
              max-w-3xl
              border-l-2
              border-blue-100
              pl-6
              transition-colors
              duration-300
              dark:border-blue-900
              sm:pl-8
            "
          >
            <p
              className="
                mb-5
                text-lg
                leading-relaxed
                text-slate-700
                transition-colors
                duration-300
                dark:text-slate-200
                sm:text-xl
              "
            >
              {t("aboutIntroExtended")}
            </p>

            <p
              className="
                text-base
                leading-relaxed
                text-slate-500
                transition-colors
                duration-300
                dark:text-slate-400
              "
            >
              {t("aboutInternship")}
            </p>
          </div>
        </div>

        {/* =========================
            HOBBIES
        ========================== */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-slate-900
                transition-colors
                duration-300
                dark:text-white
              "
            >
              {t("hobbies")}
            </h2>

            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {hobbies.map((hobby) => (
              <div
                key={hobby.key}
                className={`
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-lg
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:hover:border-slate-700
                  dark:hover:shadow-black/30
                  ${hobby.rotation}
                `}
              >
                {/* Emoji */}
                <div
                  className={`
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    ${hobby.color}
                  `}
                >
                  <HobbyIcon hobby={hobby} />
                </div>

                {/* Name */}
                <span
                  className="
                    text-sm
                    font-medium
                    text-slate-700
                    transition-colors
                    duration-300
                    dark:text-slate-200
                  "
                >
                  {t(hobby.key)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            PERSONAL QUALITIES
        ========================== */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-slate-900
                transition-colors
                duration-300
                dark:text-white
              "
            >
              {t("personalQualities")}
            </h2>

            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition-colors
              duration-300
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            {qualities.map((quality, index) => (
              <div
                key={quality.qualityKey}
                className="
                  group
                  grid
                  grid-cols-[40px_1fr]
                  gap-4
                  border-b
                  border-slate-100
                  p-5
                  transition-all
                  duration-300
                  last:border-b-0
                  hover:bg-slate-50
                  hover:pl-6
                  dark:border-slate-800
                  dark:hover:bg-slate-800/60
                  sm:grid-cols-[50px_220px_1fr]
                  sm:items-center
                "
              >
                {/* =========================
                    NUMBER
                ========================== */}
                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-300
                    transition-colors
                    duration-200
                    group-hover:text-slate-400
                    dark:text-slate-600
                    dark:group-hover:text-slate-500
                  "
                >
                  0{index + 1}
                </span>

                {/* =========================
                    QUALITY
                ========================== */}
                <div className="flex items-center gap-3">
                  <QualityIcon quality={quality} />

                  <span
                    className={`
                      text-sm
                      font-semibold
                      ${quality.color}
                    `}
                  >
                    {t(quality.qualityKey)}
                  </span>
                </div>

                {/* =========================
                    DESCRIPTION
                ========================== */}
                <p
                  className="
                    col-start-2
                    text-sm
                    leading-relaxed
                    text-slate-500
                    transition-colors
                    duration-300
                    dark:text-slate-400
                    sm:col-start-auto
                  "
                >
                  {t(quality.detailKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
