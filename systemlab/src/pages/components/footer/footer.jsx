import { Link } from "react-router-dom";
import images from "../../../assets";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link to="https://www.cefetmg.br/">
        <img src={images.cefet} alt="cefet" />
      </Link>
    </div>
  );
};

export default Footer;
