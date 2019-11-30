import React, { useContext } from "react";
import { DataContext } from "../store";
export default function Title() {
  const { userLanguage, userProfile } = useContext(DataContext);
  return (
    <div>
      <h1>Hello {userProfile.name || ""}</h1>
      <h2>My current language is {userLanguage} </h2>
    </div>
  );
}
