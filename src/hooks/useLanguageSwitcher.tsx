import { useEffect, useState } from "react";
import i18n from "../translation/i18n";

export const useLanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("i18nextLng") ?? "en-US",
  );

  useEffect(() => {
    // Load the previously selected language from local storage
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage) {
      handleLanguageChange(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };

  return {
    currentLanguage,
    handleLanguageChange,
  };
};
