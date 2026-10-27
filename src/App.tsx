import { ThemeProvider } from "styled-components";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
import { readPreference, savePreference } from "./lib/preferences";
import "./styles/portfolio.css";

function App() {
  const [theme, setTheme] = useState(() => readPreference("portfolio-theme", "dark") === "light" ? "light" : "dark");
  const { i18n, t } = useTranslation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.lang = i18n.language === "pt" ? "pt-BR" : "en";
  }, [i18n.language]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    savePreference("portfolio-theme", nextTheme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <MotionConfig reducedMotion="user">
        <GlobalStyle />
        <a className="skip-link" href="#main">{t("design.skip")}</a>
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Experiences />
          <Education />
          <Courses />
          <Contact />
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
