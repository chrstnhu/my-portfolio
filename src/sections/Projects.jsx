import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

function ProjectCard({ project, t, onClick }) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.18)]
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-blue-500/50
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          flex
          h-56
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-slate-50
          dark:bg-slate-900
        "
      >
        {/* Halo */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-32
            w-32
            rounded-full
            bg-blue-400/10
            blur-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:translate-x-[-20px]
            group-hover:translate-y-[20px]
            group-hover:opacity-100
          "
        />

        {/* Image */}
        <img
          src={project.img}
          alt={project.title}
          className="
            relative
            z-10
            max-h-full
            max-w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* VIEW DETAILS */}
        <div
          className="
            absolute
            bottom-4
            right-4
            z-20
            translate-y-2
            rounded-full
            border
            border-slate-200
            bg-white/95
            px-3
            py-1.5
            text-xs
            font-medium
            text-blue-600
            opacity-0
            shadow-sm
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
            dark:border-slate-600
            dark:bg-slate-800/95
            dark:text-blue-400
          "
        >
          {t("viewDetails")} →
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        {/* TITLE */}
        <h2
          className="
            mb-3
            text-lg
            font-semibold
            tracking-tight
            text-slate-900
            transition-colors
            group-hover:text-blue-600
            dark:text-slate-100
            dark:group-hover:text-blue-400
          "
        >
          {project.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            flex-1
            text-sm
            leading-relaxed
            text-slate-500
            dark:text-slate-400
          "
        >
          {t(project.descriptionKey)}
        </p>

        {/* TECHNOLOGIES */}
        {project.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md
                  bg-slate-100
                  px-2
                  py-1
                  text-[11px]
                  font-medium
                  text-slate-500
                  dark:bg-slate-700
                  dark:text-slate-300
                "
              >
                {technology}
              </span>
            ))}

            {project.technologies.length > 3 && (
              <span
                className="
                  rounded-md
                  bg-slate-100
                  px-2
                  py-1
                  text-[11px]
                  font-medium
                  text-slate-400
                  dark:bg-slate-700
                  dark:text-slate-400
                "
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  /*
   * Grandes catégories utilisées uniquement
   * pour filtrer les projets.
   */
  const filters = [
    {
      key: "all",
      label: t("filters.all"),
    },
    {
      key: "c",
      label: "C",
    },
    {
      key: "cpp",
      label: "C++",
    },
    {
      key: "web",
      label: t("filters.web"),
    },
    {
      key: "system",
      label: t("filters.systemAdministration"),
    },
    {
      key: "networking",
      label: t("filters.networking"),
    },
    {
      key: "graphics",
      label: t("filters.graphics"),
    },
  ];

  /*
   * Filtrage des projets.
   */
  const filteredProjects = useMemo(() => {
    const projects = [...projectsData].reverse();

    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* =========================
            HEADER
        ========================== */}
        <div className="mb-10 max-w-2xl">
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-slate-100
              sm:text-5xl
            "
          >
            {t("projectsTitle")}
          </h1>

          <div
            className="
              mt-5
              h-1
              w-12
              rounded-full
              bg-blue-600
              dark:bg-blue-500
            "
          />

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-500
              dark:text-slate-400
            "
          >
            {t("projectsIntro")}
          </p>
        </div>

        {/* =========================
            FILTERS
        ========================== */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? `
                          border-blue-600
                          bg-blue-600
                          text-white
                          shadow-sm
                          hover:bg-blue-700
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-blue-300
                          hover:text-blue-600
                          dark:border-slate-700
                          dark:bg-slate-800
                          dark:text-slate-300
                          dark:hover:border-blue-500
                          dark:hover:text-blue-400
                        `
                    }
                  `}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* RESULT COUNT */}
          <p
            className="
              mt-4
              text-sm
              text-slate-400
              dark:text-slate-500
            "
          >
            {filteredProjects.length} {t("projectsFound")}
          </p>
        </div>

        {/* =========================
            PROJECTS
        ========================== */}
        {filteredProjects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                t={t}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              p-12
              text-center
              dark:border-slate-700
            "
          >
            <p
              className="
                text-slate-500
                dark:text-slate-400
              "
            >
              {t("noProjectsFound")}
            </p>
          </div>
        )}
      </div>

      {/* =========================
          MODAL
      ========================== */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          t={t}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
