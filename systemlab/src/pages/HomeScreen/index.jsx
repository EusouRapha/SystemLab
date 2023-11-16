import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Olá, gestor</h1>
        <div className={styles.buttonContainer}>
          <Link to="/cadastrarlaboratorios" className={styles.link}>
            Cadastrar Laboratórios
          </Link>
          <Link to="/visualizarlaboratorios" className={styles.link}>
            Visualizar Laboratórios
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeScreen;
