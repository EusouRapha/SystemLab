import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageDropbox = ({ onImageUpload, savedLab }) => {
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  useEffect(() => {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropboxStyle}>
      <input {...getInputProps()} />
      {isUploadSuccess ? (
        <>
          <p style={{ color: "green", fontSize: "20px" }}>
            Upload bem-sucedido!
          </p>
          <p style={text}>
            Arraste e solte a imagem aqui, ou clique para trocar a imagem.
          </p>
        </>
      ) : isDragActive ? (
        <p style={text}>Solte os arquivos aqui...</p>
      ) : (
        <p style={text}>
          Arraste e solte a imagem aqui, ou clique para selecionar.
        </p>
      )}
    </div>
  );
};

const dropboxStyle = {
  border: "2px solid #1F3DDC",
  borderRadius: "20px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  width: "550px",
};

const text = {
  color: "#1F3DDC",
  fontSize: "20px",
};

export default ImageDropbox;
