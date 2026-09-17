import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { language, changeLanguage, t } = useLanguage();

  function handleLanguageChange(event) {
    changeLanguage(event.target.value);
  }

  return (
    <header
      id="main-header"
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        w-full
        justify-between
        bg-gray-800/70
        p-4
        text-white
        backdrop-blur-lg
      "
    >
      <a
        href="#home"
        id="logo-link"
        className="
          cursor-pointer
          text-white
          no-underline
          transition-colors
          duration-200
          hover:text-gray-300
        "
      >
        My Portfolio
      </a>

      <nav className="flex items-center space-x-8">
        <a
          href="#home"
          className="
            text-white
            no-underline
            transition-colors
            duration-200
            hover:text-gray-300
          "
        >
          {t("home")}
        </a>

        <a
          href="#about"
          className="
            text-white
            no-underline
            transition-colors
            duration-200
            hover:text-gray-300
          "
        >
          {t("about")}
        </a>

        <a
          href="#projects"
          className="
            text-white
            no-underline
            transition-colors
            duration-200
            hover:text-gray-300
          "
        >
          {t("projects")}
        </a>

        <a
          href="#skills"
          className="
            text-white
            no-underline
            transition-colors
            duration-200
            hover:text-gray-300
          "
        >
          {t("skills")}
        </a>

        <a
          href="#contact"
          className="
            text-white
            no-underline
            transition-colors
            duration-200
            hover:text-gray-300
          "
        >
          {t("contact")}
        </a>

        <div className="relative ml-4">
          <select
            id="language-selector"
            value={language}
            onChange={handleLanguageChange}
            className="
              rounded
              border
              border-gray-600
              bg-gray-700
              px-3
              py-1
              text-sm
              text-white
              transition-colors
              duration-200
              hover:bg-gray-600
              focus:ring-2
              focus:ring-blue-500
              focus:outline-none
            "
          >
            <option value="en">🇺🇸 EN</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>
      </nav>
    </header>
  );
}

export default Header;
