import "./utils/i18n";
import Login from "./components/Login";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  return (
    <>
      <LanguageSwitcher />
      <Login />
    </>
  );
}
