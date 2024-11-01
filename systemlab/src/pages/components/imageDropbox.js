import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { NightModeContext } from "../../context/nightMode";

const ImageDropbox = ({ onImageUpload, savedLab }) => {
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Estado para hover
  const [isFocused, setIsFocused] = useState(false); // Estado para foco

  const [mode] = useContext(NightModeContext);

  useEffect(() => {
    // pega o savedLab por parametro da tela de registro, se tiver salvo um lab ele reseta o dropbox para a mensagem padrão.
    setIsUploadSuccess(false);
  }, [savedLab]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const firstFile = acceptedFiles[0];
        onImageUpload(firstFile);
        setIsUploadSuccess(true);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop }); //usamos a lib react-dropzone que forcene o componente e funções dela

  //isUploadSuccess é se o cara colocou uma imagem, mostra as frases abaixo
  //isDragActive é se ele tiver arrastando uma imagem no dropbox, mostra a mensagem abaixo

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const dropboxStyle =
    mode === "dark"
      ? {
          border: "2px solid #1053b7", // Azul
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          width: "550px",
          backgroundColor: "#a4d0f3",
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        }
      : {
          border: "2px solid #1053b7", // Azul
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          width: "550px",
          backgroundColor: "#0b375b",
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        };

  const dropboxHoverStyle =
    mode === "dark"
      ? {
          ...dropboxStyle,
          backgroundColor: "#1053b7",
          color: "#ffffff",
        }
      : {
          ...dropboxStyle,
          backgroundColor: "#1a82d9", // Azul claro
          color: "#000000", // Preto
        };

  const text =
    mode === "dark"
      ? {
          color: "#0b375b",
          fontSize: "24px",
          transition: "color 0.3s ease-in-out",
        }
      : {
          color: "#a4d0f3", // Azul claro
          fontSize: "24px",
          transition: "color 0.3s ease-in-out",
        };

  const textHover =
    mode === "dark"
      ? {
          ...text,
          color: "#ffffff",
        }
      : {
          ...text,
          color: "#000000", // Preto
        };

  return (
    <div
      {...getRootProps()}
      style={
        isUploadSuccess || isHovered || isFocused
          ? dropboxHoverStyle
          : dropboxStyle
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex="0" // Adiciona tabIndex para permitir foco
    >
      <input {...getInputProps()} />
      {isUploadSuccess ? (
        <>
          <p
            style={{
              color: "#01ff01",
              fontSize: "20px",
            }}
          >
            Upload bem-sucedido!
          </p>
          <p
            style={isUploadSuccess || isHovered || isFocused ? textHover : text}
          >
            Arraste e solte a imagem aqui, ou clique para trocar a imagem.
          </p>
        </>
      ) : isDragActive ? (
        <p style={isUploadSuccess || isHovered || isFocused ? textHover : text}>
          Solte os arquivos aqui...
        </p>
      ) : (
        <p style={isUploadSuccess || isHovered || isFocused ? textHover : text}>
          Arraste e solte a imagem aqui, ou clique para selecionar.
        </p>
      )}
    </div>
  );
};

export default ImageDropbox;
