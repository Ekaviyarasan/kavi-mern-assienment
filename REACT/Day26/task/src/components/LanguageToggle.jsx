import { useApp } from "../context/AppContext";

export default function LanguageToggle() {
  const { lang, setLang } = useApp();

  return (
    <button onClick={() => setLang(lang === "en" ? "ta" : "en")}>
      Switch Language
    </button>
  );
}