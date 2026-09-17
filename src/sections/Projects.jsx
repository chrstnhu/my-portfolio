import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../data/projects";

function ProjectCard({ project, t }) {
  return (
    <article
      className="
        mb-8
        flex
        flex-col
        items-stretch
        rounded-xl
        bg-white
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div
        className="
          mb-4
          flex
          h-64
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-gray-50
        "
      >
        <img
          src={project.img}
          alt={project.title}
          className="max-h-full max-w-full rounded-lg object-contain"
        />
      </div>

      <div className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            {project.title}
          </h2>

          <p className="text-sm text-gray-600">{t(project.descriptionKey)}</p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              shrink-0
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-center
              font-semibold
              text-white
              no-underline
              transition-colors
              duration-200
              hover:bg-blue-700
            "
          >
            {t("viewDetails")}
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();

  const reversedProjects = [...projectsData].reverse();

  return (
    <section id="projects" className="pt-16">
      <div
        className="
          mb-8
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {reversedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} t={t} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
