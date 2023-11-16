import React, { useEffect, useState } from "react";
import styles from "./RegisterLabScreen.module.css";
import ImageDropbox from "../components/imageDropbox";
import addMock from "../../utils/mock";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function RegisterLabScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [shouldSave, setShouldSave] = useState(false);
  const [saved, setSaved] = useState(false); // informa se salvou para passar ao componente de dropbox

  useEffect(() => {
    // sempre que a pessoa colocar uma imagem ou digitar algo no nome e descrição é chamado
    if (name != "" && description != "" && image != "") {
      // confere se a pessoa preencheu tudo e ja pode salvar
      setShouldSave(true);
    }
  }, [name, description, image]);

  const onSave = () => {
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
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Cadastrar Laboratório</h1>
          <p className={styles.dropboxTitle}>Adicione uma foto</p>
          <ImageDropbox onImageUpload={handleImageUpload} savedLab={saved} />
          <div className={styles.inputContainer}>
            <p className={styles.inputTitle}>Nome:</p>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={styles.inputContainer}>
            <p className={styles.inputTitle}>Descrição:</p>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <button
            className={shouldSave ? styles.button : styles.buttonDesactive}
            onClick={() => onSave()}
          >
            Salvar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterLabScreen;
