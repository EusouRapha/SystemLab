import { useContext } from "react";
import styles from "./slider.module.css";
import images from "../../../assets";
import { NightModeContext } from "../../../context/nightMode";

export const Slider = () => {
  const { moon, sun } = images;

  const [mode, setMode] = useContext(NightModeContext);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sliderBackground} ${
          mode === "dark" ? styles.dark : ""
        }`}
      ></div>
      <button
        className={`${styles.button} ${
          mode === "light" ? styles.buttonActive : ""
        }`}
        onClick={() => handleModeChange("light")}
      >
        <img
          src={sun}
          alt="botão modo claro, icone sol"
          className={styles.icon}
        />
      </button>
      <button
        className={`${styles.button} ${
          mode === "dark" ? styles.buttonActive : ""
        }`}
        onClick={() => handleModeChange("dark")}
      >
        <img
          src={moon}
          alt="botão modo escuro, icone lua"
          className={styles.icon}
        />
      </button>
    </div>
  );
};
