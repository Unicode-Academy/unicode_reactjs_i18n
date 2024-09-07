import { useTranslation } from "react-i18next";
export default function Login() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("login.title")}</h1>
      <p>{t("login.description")}</p>
      <form action="">
        <div>
          <label htmlFor="email">{t("login.email")}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={`${t("login.email")}`}
          />
        </div>
        <div>
          <label htmlFor="password">{t("login.password")}</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={`${t("login.password")}`}
          />
        </div>
        <button>{t("login.btn")}</button>
      </form>
    </div>
  );
}
