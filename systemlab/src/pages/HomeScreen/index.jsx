import { Link } from "react-router-dom";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá, gestor</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <Link to="/cadastrarlaboratorios">Cadastrar Laboratórios</Link>
        </button>
        <button className={styles.button}>
          <Link to="/visualizarlaboratorios">Visualizar Laboratórios</Link>
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
