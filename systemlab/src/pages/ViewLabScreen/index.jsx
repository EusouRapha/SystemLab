import { useEffect } from "react";
import { useState } from "react";
import { mock } from "../../utils/mock";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./ViewLabScreen.module.css";

function ViewLabScreen() {
  const [searchLab, setSeachLab] = useState("");
  const [mockFiltered, setMockFiltered] = useState(mock);

  useEffect(() => {
    search(searchLab);
  }, [searchLab]);

  const search = (search) => {
    const regex = /[\u0300-\u036f\u0020]/g; // regex para tirar os espaços em branco

    const textRegex = search.normalize("NFD").replace(regex, "").toLowerCase(); // o metodo normalize tira os acentos

    // a busca sem acento e sem espaço em branco diminui os erros do usuário porque ele pode buscar de varias formas.

    const results = mock.filter((lab) => {
      return lab.name
        .normalize("NFD")
        .replace(regex, "")
        .toLowerCase()
        .includes(textRegex);
    });
    console.log(results);
    setMockFiltered(results);
    RenderLabs();
  };

  const RenderLabs = () => {
    // renderiza os labs buscados ou sem a busca
    return (
      <div className={styles.labsContainer}>
        {mockFiltered.map((lab, index) => (
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
    );
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Visualizar Laboratórios</h1>
        <p className={styles.subTitle}>Escolha um laboratório</p>
        <input
          type="text"
          placeholder="Busque aqui um laboratório"
          value={searchLab}
          onChange={(e) => setSeachLab(e.target.value)}
          className={styles.input}
        />
        {RenderLabs()}
      </div>
      <Footer />
    </>
  );
}

export default ViewLabScreen;
