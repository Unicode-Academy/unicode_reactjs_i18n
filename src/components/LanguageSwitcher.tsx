import { useTranslation } from "react-i18next";
import "../assets/style.css";
import clsx from "clsx";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    window.history.pushState(null, "", `?lang=${language}`);
  }, [language]);
  return (
    <div className="language">
      <button
        onClick={() => changeLanguage("vi")}
        className={clsx({ active: language === "vi" })}
      >
        Việt
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={clsx({ active: language === "en" })}
      >
        Anh
      </button>
    </div>
  );
}
