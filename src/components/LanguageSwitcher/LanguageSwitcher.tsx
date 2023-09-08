import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../translation/i18n";
import { Tooltip } from "react-tooltip";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [_, setCurrentLanguage] = useState("en");

  useEffect(() => {
    // Load the previously selected language from local storage
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className="text-black lg:text-white font-lato-bold lg:font-lato-light flex">
      <button
        data-tooltip-id="language-tooltip"
        data-tooltip-content={t("languages.en")}
        data-tooltip-place="bottom"
        className="flex items-center gap-2"
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
      &nbsp;|&nbsp;
      <button
        data-tooltip-id="language-tooltip"
        data-tooltip-content={t("languages.ro")}
        data-tooltip-place="bottom"
        className="flex items-center gap-2"
        onClick={() => handleLanguageChange("ro")}
      >
        RO
      </button>
      <Tooltip id="language-tooltip" />
    </div>
  );
};
