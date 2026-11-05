import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language || "en";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("portfolio_lang", lng);
  };

  const languages = [
    { code: "en", label: "EN", title: "English" },
  ];

  return (
    <div className="language-switcher-pill" title="Switch Language / ቋንቋ ይምረጡ">
      <Globe size={14} className="lang-icon" />
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => changeLanguage(item.code)}
          className={`lang-btn ${currentLang === item.code ? "active" : ""}`}
          title={item.title}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
