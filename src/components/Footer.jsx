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

  const linkClass = "text-sm text-slate-400 transition-colors hover:text-white";

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          {/* Description */}
          <div className="max-w-sm">
            <p className="mb-2 font-semibold">{t("footerTitle")}</p>

            <p className="text-sm leading-relaxed text-slate-400">
              {t("footerDescription")}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <nav className="flex flex-col gap-2">
              <span className="mb-1 text-sm font-semibold text-white">
                {t("navigate")}
              </span>

              {navigation.map(([key, labelKey]) => (
                <a key={key} href={`#${key}`} className={linkClass}>
                  {t(labelKey)}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col gap-2">
              <span className="mb-1 text-sm font-semibold text-white">
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

        <div className="mt-8 border-t border-slate-800 pt-5">
          <p className="text-xs text-slate-500">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
