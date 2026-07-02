import i18n from "../i18n/i18n";

function LanguageSwitcher() {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("am")}>AM</button>
      <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
    </div>
  );
}

export default LanguageSwitcher;