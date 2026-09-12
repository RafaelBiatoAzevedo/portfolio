import {
  ActionsWrapper,
  Container,
  Copy,
  DesktopOnly,
  FooterMenuMobile,
  LanguageButton,
  Logo,
  LogoWrapper,
  MenuToggleButton,
  Menu,
  MenuItem,
  MenuWrapper,
  MobileMenu,
  MobileOnly,
  SwitchCircle,
  ThemeSwitch,
} from "./styles";
import { useTranslation } from "react-i18next";

import profile from "../../assets/caricature.png";
import { useEffect, useState } from "react";
import { SocialLinks } from "../SocialLinks";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiGrid,
  FiHome,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const sectionAndIcons = {
  hero: FiHome,
  about: FiUser,
  projects: FiGrid,
  experiences: FiBriefcase,
  education: FiBookOpen,
  courses: FiAward,
  contact: FiMail,
};

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

    Object.keys(sectionAndIcons).forEach((id) => {
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
          {Object.keys(sectionAndIcons).map((name) => (
            <MenuItem
              key={name}
              as="a"
              href={`#${name}`}
              $active={active === name}
            >
              {t(`nav.${name}`)}
            </MenuItem>
          ))}
        </Menu>
      </DesktopOnly>

      <DesktopOnly>
        <ActionsWrapper>
          <ThemeSwitch type="button" onClick={toggleTheme}
            aria-label={t(theme === "dark" ? "accessibility.activateLightTheme" : "accessibility.activateDarkTheme")}
          >
            <SwitchCircle themeMode={theme}>
              {theme === "dark" ? "🌙" : "☀️"}
            </SwitchCircle>
          </ThemeSwitch>

          <LanguageButton type="button" onClick={toggleLanguage}
            aria-label={t("accessibility.changeLanguage")}
          >
            {i18n.language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </LanguageButton>
        </ActionsWrapper>
      </DesktopOnly>

      <MobileOnly>
        <MenuToggleButton type="button" onClick={() => setIsOpen((open) => !open)}
          aria-label={t(isOpen ? "accessibility.closeMenu" : "accessibility.openMenu")}
          aria-expanded={isOpen} aria-controls="mobile-menu"
        >
          {isOpen ? <FiX size="3rem" /> : <FiMenu size="3rem" />}
        </MenuToggleButton>
      </MobileOnly>

      <MobileMenu id="mobile-menu" $open={isOpen}>
        <MenuWrapper>
          {Object.entries(sectionAndIcons).map(([name, Icon]) => {
            return (
              <MenuItem
                key={name}
                as="a"
                href={`#${name}`}
                $active={active === name}
                onClick={handleClick}
              >
                <Icon />
                {t(`nav.${name}`)}
              </MenuItem>
            );
          })}

          <ActionsWrapper>
            <ThemeSwitch type="button" onClick={toggleTheme}
              aria-label={t(theme === "dark" ? "accessibility.activateLightTheme" : "accessibility.activateDarkTheme")}
            >
              <SwitchCircle themeMode={theme}>
                {theme === "dark" ? "🌙" : "☀️"}
              </SwitchCircle>
            </ThemeSwitch>

            <LanguageButton type="button" onClick={toggleLanguage}
              aria-label={t("accessibility.changeLanguage")}
            >
              {i18n.language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
            </LanguageButton>
          </ActionsWrapper>
        </MenuWrapper>

        <FooterMenuMobile>
          <SocialLinks />
          <Copy>© {new Date().getFullYear()} Rafael Azevedo</Copy>
        </FooterMenuMobile>
      </MobileMenu>
    </Container>
  );
};
