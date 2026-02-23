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
import { Certificates } from "./sections/Certificates";
import { Courses } from "./sections/Courses";

function App() {
  const [theme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Education />
      {/* <Courses /> */}
      <Certificates />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
