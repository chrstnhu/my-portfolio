import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <p>{t("footerTitle")}</p>

          <p>
            {t("footerDescription")}
          </p>
        </div>

        <div className="flex flex-row gap-6">
          {/* Navigation */}
          <nav className="flex flex-col">
            <span className="mb-2 text-xl font-bold">
              {t("navigate")}
            </span>

            <a
              href="#home"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("home")}
            </a>

            <a
              href="#about"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("about")}
            </a>

            <a
              href="#projects"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("projects")}
            </a>

            <a
              href="#skills"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("skills")}
            </a>

            <a
              href="#contact"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("contact")}
            </a>
          </nav>

          {/* Connexion */}
          <nav className="flex flex-col">
            <span className="mb-2 text-xl font-bold">
              {t("connect")}
            </span>

            <a
              href="https://github.com/chrstnhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("github")}
            </a>

            <a
              href="mailto:christinehu@live.be"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("mail")}
            </a>

            <a
              href="https://fr.linkedin.com/in/christine-hu-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {t("linkedin")}
            </a>
          </nav>
        </div>
      </div>

      <p className="mt-8">
        {t("copyright")}
      </p>
    </footer>
  );
}

export default Footer;