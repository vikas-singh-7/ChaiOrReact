import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Card from "./components/Card";
import ThemeButon from "./components/ThemeButon";

const App = () => {
  const [themeMode, setThememode] = useState("light");
  const lightTheme = () => {
    setThememode("light");
  };
  const darkTheme = () => {
    setThememode("dark");
  };
  // theme mode working
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButon/>
            </div>
              <Card/>
            <div className="w-full max-w-sm mx-auto"></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;