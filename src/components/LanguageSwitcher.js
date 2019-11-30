import React, { useContext } from "react";
import { DataContext } from "../store";
export default function LanguageSwitcher() {
  const { userLanguage, setUserLanguage } = useContext(DataContext);
  const handleChange = e => setUserLanguage(e.target.value);
  return (
    <div>
      <select value={userLanguage} onChange={handleChange}>
        <option value="en">English</option>
        <option value="sp">Spanish</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}
