import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./store";
import Title from "./components/Title";
import LanguageSwitcher from "./components/LanguageSwitcher";
import UserProfile from "./components/UserProfile";

import "./styles.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Title />
        <LanguageSwitcher />
        <UserProfile />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
