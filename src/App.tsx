import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/NavBar";
import { About } from "./sections/About";

function App() {
  const [theme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
    </ThemeProvider>
  );
}

export default App;
