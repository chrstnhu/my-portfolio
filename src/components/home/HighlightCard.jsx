import { useLanguage } from "../../context/LanguageContext";

function HighlightCard({
  highlight,
  index,
  isActive,
  zIndex,
  onSelect,
  onNavigate,
}) {
  const { t } = useLanguage();

  const positions = [
    "left-4 top-10 -rotate-6 hover:-rotate-3",
    "right-4 top-2 rotate-5 hover:rotate-2",
    "left-10 bottom-2 rotate-2 hover:rotate-0",
  ];

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      onSelect(index);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(index)}
      onKeyDown={handleKeyDown}
      style={{ zIndex }}
      className={`absolute w-64 cursor-pointer bg-white p-3 pb-4 text-left shadow-md transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        positions[index]
      } ${
        isActive
          ? "scale-105 -translate-y-4 shadow-xl"
          : "opacity-90 hover:-translate-y-8 hover:scale-105 hover:shadow-xl"
      }`}
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={highlight.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover transition-transform duration-500"
        />

        <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-600 shadow-sm">
          {highlight.number}
        </span>
      </div>

      <div className="px-1 pt-3">
        <h3
          className={`text-lg font-semibold transition-colors duration-200 ${
            isActive ? "text-blue-600" : "text-slate-800"
          }`}
        >
          {highlight.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {highlight.description}
        </p>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate(highlight.key);
          }}
          className={`mt-3 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
            isActive
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {t("viewDetails")}
          <span
            aria-hidden="true"
            className="transition-transform duration-200"
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
}

export default HighlightCard;
