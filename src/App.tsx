import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/NavBar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experiences } from "./sections/Experiences";
import { Courses } from "./sections/Courses";
import { Projects } from "./sections/Projects";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("portfolio-theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experiences />
      <Education />
      <Courses />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
