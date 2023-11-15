import { mock } from "../../utils/mock";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./ViewLabScreen.module.css";

function ViewLabScreen() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Visualizar Laboratórios</h1>
        <p className={styles.subTitle}>Escolha um laboratório</p>
        <div className={styles.labsContainer}>
          {mock.map((lab, index) => (
            <div key={index} className={styles.labInnerContainer}>
              <p className={styles.name}>{lab.name}</p>
              <img
                src={lab.image}
                alt={lab.description}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewLabScreen;
