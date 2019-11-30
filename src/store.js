import React, { useState } from "react";

export const DataContext = React.createContext();

export function Provider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");
  const [userProfile, setUserProfile] = useState({ name: "User" });
  const store = {
    userLanguage,
    setUserLanguage,
    userProfile,
    setUserProfile
  };
  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}
