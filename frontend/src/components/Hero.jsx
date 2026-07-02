import { useTranslation } from "react-i18next";

function Hero() {

  const { t } = useTranslation();

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>{t("welcome")}</h1>

        <h2>
          Full Stack Developer & Computer Engineer
        </h2>

        <p>
          Graduate of Debre Markos University
          in Electrical and Computer Engineering
          specializing in Computer Engineering.
        </p>

        <button className="hero-btn">
          Explore Services
        </button>

      </div>

    </section>
  );
}

export default Hero;