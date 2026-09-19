import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import HighlightCard from "./HighlightCard";

function HighlightCarousel() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [
    {
      key: "about",
      number: "01",
      title: t("about"),
      description: t("aboutIntroExtended"),
      image: "/assets/background/contact-img.jpg",
    },
    {
      key: "skills",
      number: "02",
      title: t("skills"),
      description: t("skillsPreview"),
      image: "/assets/background/skills-img.jpg",
    },
    {
      key: "projects",
      number: "03",
      title: t("projects"),
      description: t("projectsPreview"),
      image: "/assets/background/project-img.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [highlights.length]);

  function selectHighlight(index) {
    setActiveIndex(index);
  }

  function goToSection(section) {
    window.location.hash = section;
  }

  function getZIndex(index) {
    if (index === activeIndex) {
      return 30;
    }

    if (index === (activeIndex + 1) % highlights.length) {
      return 10;
    }

    return 20;
  }

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[380px]">
      {highlights.map((highlight, index) => (
        <HighlightCard
          key={highlight.key}
          highlight={highlight}
          index={index}
          isActive={index === activeIndex}
          zIndex={getZIndex(index)}
          onSelect={selectHighlight}
          onNavigate={goToSection}
        />
      ))}

      <div className="absolute -bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.key}
            type="button"
            onClick={() => selectHighlight(index)}
            aria-label={`Show ${highlight.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-blue-500"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HighlightCarousel;
