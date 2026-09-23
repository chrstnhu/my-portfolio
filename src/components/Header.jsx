import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();

  const navigation = [
    ["about", "about"],
    ["projects", "projects"],
    ["skills", "skills"],
    ["contact", "contact"],
  ];

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
        w-full
        bg-gray-200/60
        text-slate-800
        shadow-sm
        backdrop-blur-md
        transition-colors
        duration-300
        dark:bg-slate-900/70
        dark:text-slate-200
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#home"
          id="logo-link"
          className="
            font-semibold
            text-slate-900
            no-underline
            transition-all
            duration-200
            hover:-translate-y-px
            hover:text-blue-600
            dark:text-white
            dark:hover:text-blue-400
          "
        >
          Christine HU
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-3 sm:gap-7">
          {navigation.map(([key, labelKey]) => (
            <a
              key={key}
              href={`#${key}`}
              className="
                group
                relative
                hidden
                text-sm
                font-medium
                text-slate-700
                no-underline
                transition-colors
                duration-200
                hover:text-blue-600
                dark:text-slate-300
                dark:hover:text-blue-400
                sm:block
              "
            >
              {t(labelKey)}

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-blue-600
                  transition-all
                  duration-200
                  group-hover:w-full
                  dark:bg-blue-400
                "
              />
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-slate-300/70
              bg-slate-200/50
              text-sm
              transition-all
              duration-200
              hover:scale-105
              hover:border-blue-300
              hover:bg-slate-200/80
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/50
              dark:border-slate-600
              dark:bg-slate-800/70
              dark:hover:border-blue-400
              dark:hover:bg-slate-700
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Language */}
          <select
            id="language-selector"
            value={language}
            onChange={handleLanguageChange}
            aria-label="Select language"
            className="
              rounded-md
              border
              border-slate-300/70
              bg-slate-200/50
              px-2
              py-1
              text-sm
              text-slate-700
              outline-none
              backdrop-blur-sm
              transition-all
              duration-200
              hover:border-blue-300
              hover:bg-slate-200/70
              focus:border-blue-500
              focus:ring-1
              focus:ring-blue-500
              dark:border-slate-600
              dark:bg-slate-800/70
              dark:text-slate-200
              dark:hover:border-blue-400
              dark:hover:bg-slate-700
            "
          >
            <option value="en">🇺🇸 EN</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
