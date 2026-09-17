import { createContext, useContext, useState } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");

    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    return "en";
  });

  function changeLanguage(newLanguage) {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  }

  function t(key) {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value ?? key;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
