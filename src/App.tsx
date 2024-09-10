import "./utils/i18n";
import Login from "./components/Login";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import { loadTranslations } from "./utils/i18n";
// import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   loadTranslations(i18n.language, setLoading);
  // }, [i18n.language]);

  // if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <h1>{t("page_title")}</h1>
      <LanguageSwitcher />
      <Login />
    </>
  );
}
