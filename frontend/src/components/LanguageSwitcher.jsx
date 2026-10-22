import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "am", label: "አማ", name: "አማርኛ" },
    { code: "fr", label: "FR", name: "Français" },
  ];

  return (
    <div className="language-switcher-pill">
      <Globe size={15} className="lang-icon" />
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => changeLang(l.code)}
          className={`lang-btn ${currentLang === l.code ? "active" : ""}`}
          title={l.name}
          aria-label={`Switch to ${l.name}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
