import { useLanguage } from "../context/LanguageContext";

const hobbies = [
  {
    emoji: "🎨",
    key: "hobbyList.drawing",
    color: "from-red-50 to-red-100 border-red-200",
  },
  {
    emoji: "✈️",
    key: "hobbyList.traveling",
    color: "from-blue-50 to-blue-100 border-blue-200",
  },
  {
    emoji: "🧩",
    key: "hobbyList.puzzles",
    color: "from-purple-50 to-purple-100 border-purple-200",
  },
  {
    emoji: "🎵",
    key: "hobbyList.listeningMusic",
    color: "from-green-50 to-green-100 border-green-200",
  },
  {
    emoji: "🎮",
    key: "hobbyList.playingGames",
    color: "from-orange-50 to-orange-100 border-orange-200",
  },
];

const qualities = [
  {
    emoji: "🔄",
    qualityKey: "qualities.adaptability",
    detailKey: "qualityDetails.adaptability",
    color: "from-blue-50 to-blue-100 border-blue-200",
  },
  {
    emoji: "🤝",
    qualityKey: "qualities.collaboration",
    detailKey: "qualityDetails.collaboration",
    color: "from-green-50 to-green-100 border-green-200",
  },
  {
    emoji: "📚",
    qualityKey: "qualities.autonomousLearning",
    detailKey: "qualityDetails.autonomousLearning",
    color: "from-purple-50 to-purple-100 border-purple-200",
  },
  {
    emoji: "🔀",
    qualityKey: "qualities.flexibility",
    detailKey: "qualityDetails.flexibility",
    color: "from-orange-50 to-orange-100 border-orange-200",
  },
  {
    emoji: "💡",
    qualityKey: "qualities.creativity",
    detailKey: "qualityDetails.creativity",
    color: "from-pink-50 to-pink-100 border-pink-200",
  },
  {
    emoji: "🌟",
    qualityKey: "qualities.openMinded",
    detailKey: "qualityDetails.openMinded",
    color: "from-teal-50 to-teal-100 border-teal-200",
  },
];

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-16">
      <div className="relative flex flex-col items-start rounded-xl bg-slate-50 p-8 shadow-xl">
        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          {t("aboutTitle")}
        </h1>

        {/* Introduction */}
        <div className="mb-6 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6">
          <p className="mb-4 text-lg font-medium leading-relaxed text-blue-800">
            {t("aboutIntroExtended")}
          </p>

          <p className="text-lg font-medium leading-relaxed text-blue-800">
            {t("aboutInternship")}
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-6 w-full rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            {t("hobbies")}
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {hobbies.map((hobby) => (
              <div
                key={hobby.key}
                className={`flex flex-col items-center rounded-lg border bg-gradient-to-br p-3 ${hobby.color} transition-shadow duration-200 hover:shadow-sm`}
              >
                <div className="mb-1 text-xl">{hobby.emoji}</div>

                <span className="text-center text-xs font-medium">
                  {t(hobby.key)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal qualities */}
        <div className="mb-6 w-full rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            {t("personalQualities")}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qualities.map((quality) => (
              <div
                key={quality.qualityKey}
                className={`group flex h-32 cursor-pointer flex-col justify-between rounded-lg border bg-gradient-to-br p-4 text-center transition-all duration-200 hover:shadow-md ${quality.color}`}
              >
                <div className="mb-1 text-2xl">{quality.emoji}</div>

                <div className="mb-1 text-sm font-medium">
                  {t(quality.qualityKey)}
                </div>

                <div className="flex h-8 items-center justify-center text-center text-xs leading-tight opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {t(quality.detailKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
