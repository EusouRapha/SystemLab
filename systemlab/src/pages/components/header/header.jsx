import { Link } from "react-router-dom";
import { useContext } from "react";
import Images from "../../../assets";
import styles from "./header.module.css";
import { NightModeContext } from "../../../context/nightMode";

const Header = () => {
  const [mode] = useContext(NightModeContext);
  // to="/" navega para a tela inicial, no caso a home
  return (
    <div className={styles.Container}>
      <Link
        to="/"
        className={`${styles.link} ${
          mode === "dark" ? styles.linkNightMode : ""
        }`}
      >
        <img src={Images.home} alt="Voltar para a tela principal" />
      </Link>
    </div>
  );
};

export default Header;
