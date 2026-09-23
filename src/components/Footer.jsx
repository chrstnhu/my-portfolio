import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const navigation = [
    ["about", "about"],
    ["projects", "projects"],
    ["skills", "skills"],
    ["contact", "contact"],
  ];

  const socialLinks = [
    ["github", "https://github.com/chrstnhu"],
    ["mail", "mailto:christinehu@live.be"],
    ["linkedin", "https://fr.linkedin.com/in/christine-hu-"],
  ];

  const linkClass = `
    text-sm
    text-slate-600
    transition-colors
    hover:text-blue-600
    dark:text-slate-400
    dark:hover:text-white
  `;

  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* Description */}
          <div className="max-w-sm">
            <p className="mb-2 font-semibold text-slate-900 dark:text-white">
              {t("footerTitle")}
            </p>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("footerDescription")}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <nav className="flex flex-col gap-2">
              <span className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
                {t("navigate")}
              </span>

              {navigation.map(([key, labelKey]) => (
                <a key={key} href={`#${key}`} className={linkClass}>
                  {t(labelKey)}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col gap-2">
              <span className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
                {t("connect")}
              </span>

              {socialLinks.map(([labelKey, href]) => (
                <a
                  key={labelKey}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={linkClass}
                >
                  {t(labelKey)}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
