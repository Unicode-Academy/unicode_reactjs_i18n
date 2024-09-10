import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Login() {
  const { t } = useTranslation("auth");

  const [form, setForm] = useState<{ email: string; password: string }>(
    {} as { email: string; password: string }
  );
  const [msg, setMsg] = useState<{ email: string; password: string }>(
    {} as { email: string; password: string }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { email: string; password: string } = {} as {
      email: string;
      password: string;
    };

    if (!form.email) {
      errors.email = t("required", {
        field: t("attributes.email"),
      });
    }

    if (!form.password) {
      errors.password = t("required", {
        field: t("attributes.password"),
      });
    }

    setMsg(errors);
  };
  return (
    <div>
      <h1>{t("login.title")}</h1>
      <p>{t("login.description")}</p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">{t("login.email")}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={`${t("login.email")}`}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          {msg.email && <p className="error">{msg.email}</p>}
        </div>
        <div>
          <label htmlFor="password">{t("login.password")}</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={`${t("login.password")}`}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          {msg.password && <p className="error">{msg.password}</p>}
        </div>
        <button>{t("login.btn")}</button>
      </form>
    </div>
  );
}
