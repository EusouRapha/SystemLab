import { Link } from "react-router-dom";
import Images from "../../../assets";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.Container}>
      <Link to="/">
        <img src={Images.home} alt="home" />
      </Link>
    </div>
  );
};

export default Header;
