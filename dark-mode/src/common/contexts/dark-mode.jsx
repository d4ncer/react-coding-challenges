import React from "react";

const DarkModeContext = React.createContext(null);

const htmlEl = document.querySelector("html");

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    if (isDarkMode) {
      htmlEl.classList.add("dark-mode");
    } else {
      htmlEl.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const ctx = React.useContext(DarkModeContext);
  if (!ctx) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return ctx;
};
