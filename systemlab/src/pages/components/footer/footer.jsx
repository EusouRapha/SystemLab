import { Link } from "react-router-dom";
import images from "../../../assets";
import styles from "./footer.module.css";

const Footer = ({ footerLinkRef }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      footerLinkRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <Link
        to="https://www.cefetmg.br/"
        onKeyDown={handleKeyDown}
        tabIndex="0" /* Adiciona tabIndex para permitir foco */
        ref={footerLinkRef}
      >
        <img src={images.cefet} alt="Redirecionar para o site do CEFET" />
      </Link>
    </div>
  );
};

export default Footer;
