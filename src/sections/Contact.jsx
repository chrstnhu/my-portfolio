import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function ContactCard({ children }) {
  return (
    <div
      className="
        mb-8
        flex
        w-full
        box-border
        flex-col
        items-start
        rounded-xl
        bg-slate-50
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-slate-100
        hover:shadow-2xl
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
    <section id="contact" className="pt-16">
      <div
        className="
          mb-8
          mt-8
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
        "
      >
        {/* Email */}
        <ContactCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span aria-hidden="true">📧</span>
            Email
          </h2>

          <button
            type="button"
            onClick={handleEmailToggle}
            aria-label={
              showEmail
                ? "Hide my email address"
                : "Show my email address"
            }
            className="
              inline-block
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-center
              font-semibold
              text-white
              transition-colors
              duration-200
              hover:bg-blue-700
            "
          >
            {showEmail ? t("hideEmail") : t("showEmail")}
          </button>

          {showEmail && (
            <p className="mt-4">
              <a
                href="mailto:christinehu@live.be"
                className="text-blue-600 underline hover:text-blue-800"
              >
                christinehu@live.be
              </a>
            </p>
          )}
        </ContactCard>

        {/* GitHub */}
        <ContactCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span aria-hidden="true">🐙</span>
            GitHub
          </h2>

          <a
            href="https://github.com/chrstnhu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check my profile"
            className="
              inline-block
              rounded-lg
              bg-gray-800
              px-4
              py-2
              text-white
              no-underline
              outline-none
              transition-colors
              duration-200
              hover:bg-gray-700
              focus:ring-2
              focus:ring-blue-600
            "
          >
            {t("viewGithub")}
          </a>
        </ContactCard>

        {/* LinkedIn */}
        <ContactCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span aria-hidden="true">💼</span>
            LinkedIn
          </h2>

          <a
            href="https://fr.linkedin.com/in/christine-hu-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check my LinkedIn profile"
            className="
              inline-block
              rounded-lg
              bg-blue-700
              px-4
              py-2
              text-white
              no-underline
              transition-colors
              duration-200
              hover:bg-blue-800
              focus:outline-none
              focus:ring-2
              focus:ring-blue-700
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