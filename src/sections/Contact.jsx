import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function ContactCard({ children }) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-start
        rounded-xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-md

        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-blue-500
        dark:hover:shadow-lg
      "
    >
      {children}
    </div>
  );
}

function Contact() {
  const { t } = useLanguage();
  const [showEmail, setShowEmail] = useState(false);

  function handleEmailToggle() {
    setShowEmail((current) => !current);
  }

  return (
    <section
      id="contact"
      className="
        mx-auto
        flex
        min-h-screen
        max-w-6xl
        flex-col
        justify-center
        gap-6
        px-6
        py-24
        sm:gap-8
      "
    >
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
            sm:text-5xl
          "
        >
          {t("contactTitle")}
        </h1>

        <div className="mt-5 h-1 w-12 rounded-full bg-blue-600" />

        <p className="text-lg text-slate-600 dark:text-slate-400">
          {t("contactIntro")}
        </p>
      </div>

      {/* Contact cards */}
      <div
        className="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
        "
      >
        {/* GitHub */}
        <ContactCard>
          <h2
            className="
              mb-4
              flex
              items-center
              gap-2
              text-lg
              font-semibold
              text-slate-800
              dark:text-slate-100
            "
          >
            <span aria-hidden="true">🐙</span>
            GitHub
          </h2>

          <a
            href="https://github.com/chrstnhu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check my profile"
            className="
              rounded-md
              bg-slate-800
              px-4
              py-2
              text-sm
              font-medium
              text-white
              no-underline
              transition-colors
              duration-200
              hover:bg-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
              dark:bg-slate-700
              dark:hover:bg-slate-600
              dark:focus:ring-offset-slate-800
            "
          >
            {t("viewGithub")}
          </a>
        </ContactCard>

        {/* LinkedIn */}
        <ContactCard>
          <h2
            className="
              mb-4
              flex
              items-center
              gap-2
              text-lg
              font-semibold
              text-slate-800
              dark:text-slate-100
            "
          >
            <span aria-hidden="true">💼</span>
            LinkedIn
          </h2>

          <a
            href="https://fr.linkedin.com/in/christine-hu-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check my LinkedIn profile"
            className="
              rounded-md
              bg-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              no-underline
              transition-colors
              duration-200
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
              dark:bg-blue-500
              dark:hover:bg-blue-600
              dark:focus:ring-offset-slate-800
            "
          >
            {t("viewLinkedin")}
          </a>
        </ContactCard>
      </div>
    </section>
  );
}

export default Contact;
