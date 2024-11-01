import { Link } from "react-router-dom";
import { useContext } from "react";
import images from "../../../assets";
import styles from "./footer.module.css";
import { Slider } from "../slider/slider";
import { NightModeContext } from "../../../context/nightMode";

const Footer = ({ footerLinkRef }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      footerLinkRef.current.click();
    }
  };

  const [mode] = useContext(NightModeContext);

  return (
    <div className={styles.container}>
      <Link
        to="https://www.cefetmg.br/"
        onKeyDown={handleKeyDown}
        tabIndex="0" /* Adiciona tabIndex para permitir foco */
        ref={footerLinkRef}
        className={`${styles.containerLink} ${
          mode === "dark" ? styles.containerLinkNightMode : ""
        }`}
      >
        <img src={images.cefet} alt="Redirecionar para o site do CEFET" />
      </Link>
      <Slider />
    </div>
  );
};

export default Footer;
