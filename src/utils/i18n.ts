import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: {
          title: "Login",
          description: "Please login to continue",
          email: "Email Address",
          password: "Password",
          btn: "Login",
        },
      },
    },
    vi: {
      translation: {
        login: {
          title: "Đăng nhập",
          description: "Vui lòng đăng nhập để tiếp tục",
          email: "Địa chỉ email",
          password: "Mật khẩu",
          btn: "Đăng nhập",
        },
      },
    },
  },
  lng: "vi",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18n;
