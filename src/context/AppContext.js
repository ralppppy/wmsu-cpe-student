import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <AppContext.Provider value={{ dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
