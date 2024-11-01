import React, { useEffect, useState, useRef, useContext } from "react";
import styles from "./RegisterLabScreen.module.css";
import ImageDropbox from "../components/imageDropbox";
import addMock from "../../utils/mock";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { NightModeContext } from "../../context/nightMode";

function RegisterLabScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [shouldSave, setShouldSave] = useState(false);
  const [saved, setSaved] = useState(false); // informa se salvou para passar ao componente de dropbox
  const navigate = useNavigate(); // Hook para navegação

  const [mode] = useContext(NightModeContext);

  useEffect(() => {
    // sempre que a pessoa colocar uma imagem ou digitar algo no nome e descrição é chamado
    if (name !== "" && description !== "" && image !== "") {
      // confere se a pessoa preencheu tudo e ja pode salvar
      setShouldSave(true);
    } else {
      setShouldSave(false);
    }
  }, [name, description, image]);

  const footerLinkRef = useRef(null);

  const onSave = () => {
    if (!shouldSave) {
      alert("Preencha todos os campos para salvar o laboratório.");
      return; // Não faz nada se shouldSave for false
    }

    addMock(name, description, image); // create, adiciona no mock o que o usuario salvou

    var resposta = window.confirm(
      // chama uma janela no navegador para o usuário clicar em ok ou em cancelar, se ok a reposta = true
      "Cadastro bem-sucedido! Clique em OK para continuar."
    );
    setSaved(resposta);

    if (resposta) {
      // reseta as variaveis
      setName("");
      setDescription("");
      setImage("");
      navigate("/visualizarlaboratorios"); // Redireciona para a página de visualização de laboratórios
    }
  };

  const handleImageUpload = (file) => {
    // função para salvar a imagem enviada
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`${mode === "dark" ? styles.outNightModeContainer : ""}`}>
      <Header />
      <div
        className={`${styles.container} ${
          mode === "dark" ? styles.containerNightMode : ""
        }`}
      >
        <h1
          className={`${styles.title} ${
            mode === "dark" ? styles.titleNightMode : ""
          }`}
        >
          Cadastrar Laboratório
        </h1>
        <p
          className={`${styles.dropboxTitle} ${
            mode === "dark" ? styles.dropboxTitleNightMode : ""
          }`}
        >
          Adicione uma foto
        </p>
        <div>
          <ImageDropbox onImageUpload={handleImageUpload} savedLab={saved} />
        </div>
        <div className={styles.inputContainer}>
          <p
            className={`${styles.inputTitle} ${
              mode === "dark" ? styles.inputTitleNightMode : ""
            }`}
          >
            Nome:
          </p>
          <input
            type="text"
            className={`${styles.input} ${
              mode === "dark" ? styles.inputNightMode : ""
            }`}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.inputContainer}>
          <p
            className={`${styles.inputTitle} ${
              mode === "dark" ? styles.inputTitleNightMode : ""
            }`}
          >
            Descrição:
          </p>
          <input
            type="text"
            className={`${styles.input} ${
              mode === "dark" ? styles.inputNightMode : ""
            }`}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button
          className={
            shouldSave
              ? `${styles.button} ${
                  mode === "dark" ? styles.buttonNightMode : ""
                }`
              : styles.buttonDesactive
          }
          onClick={() => onSave()}
        >
          Salvar
        </button>
      </div>
      <Footer footerLinkRef={footerLinkRef} />
    </div>
  );
}

export default RegisterLabScreen;
