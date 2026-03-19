import {
  ActionsWrapper,
  Container,
  DesktopOnly,
  Hamburger,
  LanguageButton,
  Logo,
  LogoWrapper,
  Menu,
  MenuItem,
  MobileMenu,
  MobileOnly,
  SwitchCircle,
  ThemeSwitch,
} from "./styles";
import { useTranslation } from "react-i18next";

import profile from "../../assets/caricature.png";
import { useEffect, useState } from "react";
import { SocialLinks } from "../SocialLinks";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const sections = [
  "hero",
  "about",
  "projects",
  "experiences",
  "education",
  "courses",
  "contact",
];

export const Navbar = ({ toggleTheme, theme }: NavbarProps) => {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";

    i18n.changeLanguage(newLang);
    localStorage.setItem("portfolio-language", newLang);
  };

  const handleClick = () => setIsOpen(false);

  return (
    <Container>
      <LogoWrapper>
        <Logo src={profile} alt="Rafael caricature" />
      </LogoWrapper>

      <DesktopOnly>
        <Menu>
          {sections.map((id) => (
            <MenuItem key={id} as="a" href={`#${id}`} $active={active === id}>
              {t(`nav.${id}`)}
            </MenuItem>
          ))}
        </Menu>
      </DesktopOnly>

      <DesktopOnly>
        <ActionsWrapper>
          <ThemeSwitch onClick={toggleTheme}>
            <SwitchCircle themeMode={theme}>
              {theme === "dark" ? "🌙" : "☀️"}
            </SwitchCircle>
          </ThemeSwitch>

          <LanguageButton onClick={toggleLanguage}>
            {i18n.language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </LanguageButton>
        </ActionsWrapper>
      </DesktopOnly>

      <MobileOnly>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </MobileOnly>

      <MobileMenu $open={isOpen}>
        {sections.map((id) => (
          <MenuItem
            key={id}
            as="a"
            href={`#${id}`}
            $active={active === id}
            onClick={handleClick}
          >
            {t(`nav.${id}`)}
          </MenuItem>
        ))}

        <ActionsWrapper>
          <ThemeSwitch onClick={toggleTheme}>
            <SwitchCircle themeMode={theme}>
              {theme === "dark" ? "🌙" : "☀️"}
            </SwitchCircle>
          </ThemeSwitch>

          <LanguageButton onClick={toggleLanguage}>
            {i18n.language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </LanguageButton>
        </ActionsWrapper>

        <SocialLinks />
      </MobileMenu>
    </Container>
  );
};
