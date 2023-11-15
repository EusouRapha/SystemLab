import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterLabScreen.module.css";
import ImageDropbox from "../components/imageDropbox";

function RegisterLabScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [shouldSave, setShouldSave] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (name != "" && description != "" && image != "") {
      setShouldSave(true);
    }
  }, [name, description, image]);

  const onSave = () => {
    // aqui salva no mock

    var resposta = window.confirm(
      "Cadastro bem-sucedido! Clique em OK para continuar."
    );
    setSaved(resposta);

    if (resposta) {
      setName("");
      setDescription("");
      setImage("");
    }
  };

  const saveName = (e) => {
    setName(e.target.value);
  };

  const saveDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Cadastrar Laboratório</h1>
        <p className={styles.dropboxTitle}>Adicione uma foto</p>
        <ImageDropbox onImageUpload={handleImageUpload} savedLab={saved} />
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Nome:</p>
          <input
            type="text"
            className={styles.input}
            onChange={saveName}
            value={name}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Descrição:</p>
          <input
            type="text"
            className={styles.input}
            onChange={saveDescription}
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
  );
}

export default RegisterLabScreen;
