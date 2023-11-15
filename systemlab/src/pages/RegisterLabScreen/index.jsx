import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterLabScreen.module.css";
import ImageDropbox from "../components/imageDropbox";

function RegisterLabScreen() {
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target.result;
      console.log(<img src={imageData} alt="imagem" />);
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
        <ImageDropbox onImageUpload={handleImageUpload} />
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Nome:</p>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Descrição:</p>
          <input type="text" className={styles.input} />
        </div>
        <button className={styles.button}>Salvar</button>
      </div>
    </div>
  );
}

export default RegisterLabScreen;
