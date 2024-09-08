import "./utils/i18n";
import Login from "./components/Login";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useEffect } from "react";
import { loadTranslations } from "./utils/i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    loadTranslations(i18n.language);
  }, [i18n.language]);
  return (
    <>
      <LanguageSwitcher />
      <Login />
    </>
  );
}
