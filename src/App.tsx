import React, { createContext, FunctionComponent, useState } from "react";
import { AppRoutes } from "./Navigation/Routes";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWTJh-vFEQhBMaP0UByEMfRpghspoe6nc",
  authDomain: "",
  projectId: "",
  storageBucket: "chemconventions.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-D3C2TGEJQ5",
});

export const auth = getAuth(firebaseApp)

export const darkModeContext = createContext(null);

const App: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="h-full min-h-screen dark:bg-dark-60">
          <AppRoutes />
        </div>
      </div>
    </darkModeContext.Provider>
  );
};

export default App;
