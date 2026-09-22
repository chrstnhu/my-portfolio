import { useEffect } from "react";

function ProjectModal({ project, t, onClose }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/60
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-xl
            text-slate-500
            shadow-sm
            transition
            hover:bg-slate-100
            hover:text-slate-900
            dark:bg-slate-800/90
            dark:text-slate-400
            dark:hover:bg-slate-700
            dark:hover:text-white
          "
        >
          ×
        </button>

        {/* Image */}
        <div
          className="
            flex
            h-56
            shrink-0
            items-center
            justify-center
            bg-slate-50
            p-8
            dark:bg-slate-950
            sm:h-72
          "
        >
          <img
            src={project.img}
            alt={project.title}
            className="
              max-h-full
              max-w-full
              object-contain
            "
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {/* Title */}
          <div className="mb-6">
            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-3xl
              "
            >
              {project.title}
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <p
              className="
                text-base
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              {t(project.descriptionKey)}
            </p>
          </div>

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div className="mb-8">
              <h3
                className="
                  mb-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-900
                  dark:text-slate-200
                "
              >
                {t("technologies")}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      bg-blue-50
                      px-3
                      py-1.5
                      text-sm
                      font-medium
                      text-blue-600
                      dark:bg-blue-950/50
                      dark:text-blue-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {project.skills?.length > 0 && (
            <div className="mb-8">
              <h3
                className="
                  mb-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-900
                  dark:text-slate-200
                "
              >
                {t("skillsUsedTitle")}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skillKey) => (
                  <span
                    key={skillKey}
                    className="
                      rounded-lg
                      border
                      border-slate-200
                      px-3
                      py-1.5
                      text-sm
                      text-slate-600
                      dark:border-slate-700
                      dark:text-slate-300
                    "
                  >
                    {t(skillKey)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* GitHub */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-slate-900
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                no-underline
                transition
                hover:bg-slate-700
                dark:bg-blue-600
                dark:hover:bg-blue-500
              "
            >
              {t("viewGithub")}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
