import { useState,useEffect } from "react";
import Header from "./Components/Header";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import Home from "./Pages/Home";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme =()=> {
    setThemeMode("light")
  }

  const darkTheme =()=> {
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
