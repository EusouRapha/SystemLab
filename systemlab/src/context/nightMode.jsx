import React, { createContext, useState } from "react";

const NightModeContext = createContext();

const NightModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const [activeKey, setActiveKey] = useState();

  const value = [mode, setMode, activeKey, setActiveKey];

  return (
    <NightModeContext.Provider value={value}>
      {children}
    </NightModeContext.Provider>
  );
};

export { NightModeContext, NightModeContextProvider };
