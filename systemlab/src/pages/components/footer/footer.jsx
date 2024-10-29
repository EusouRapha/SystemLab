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
        tabIndex="0"
        ref={footerLinkRef}
        onKeyDown={handleKeyDown}
      >
        <img src={images.cefet} alt="cefet" />
      </Link>
    </div>
  );
};

export default Footer;
