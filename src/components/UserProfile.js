import React, { useContext } from "react";
import { DataContext } from "../store";
export default function LanguageSwitcher() {
  const { userProfile, setUserProfile } = useContext(DataContext);
  const handleChange = e => setUserProfile({ name: e.target.value });
  return (
    <div>
      <br />
      edit name here
      <input
        placeholder="User name"
        value={userProfile.name || ""}
        onChange={handleChange}
      />
    </div>
  );
}
