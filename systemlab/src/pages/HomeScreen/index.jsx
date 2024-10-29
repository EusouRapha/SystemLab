import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import styles from "./HomeScreen.module.css";
import { useRef } from "react";

function HomeScreen() {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const footerLinkRef = useRef(null);


  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (document.activeElement === link1Ref.current) {
        link2Ref.current.focus();
      } else {
        link1Ref.current.focus();
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Olá, gestor</h1>
        <div className={styles.buttonContainer}>
          <Link
            to="/cadastrarlaboratorios"
            className={styles.link}
            tabIndex="0"
            ref={link1Ref}
            onKeyDown={handleKeyDown}
          >
            Cadastrar Laboratórios
          </Link>
          <Link
            to="/visualizarlaboratorios"
            className={styles.link}
            tabIndex="0"
            ref={link2Ref}
            onKeyDown={handleKeyDown}
          >
            Visualizar Laboratórios
          </Link>
        </div>
      </div>
      <Footer footerLinkRef={footerLinkRef} />
    </>
  );
}

export default HomeScreen;
