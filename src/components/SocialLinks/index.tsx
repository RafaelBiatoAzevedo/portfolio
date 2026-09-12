import { Links, SocialButton } from "./styles";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <Links>
      <SocialButton
        href="https://www.linkedin.com/in/rafael-azevedo-530889195"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </SocialButton>

      <SocialButton
        href="https://github.com/RafaelBiatoAzevedo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </SocialButton>

      <SocialButton
        href="https://www.instagram.com/rafael_azevedo_55"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </SocialButton>

      <SocialButton
        href="https://wa.me/55019990197883"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </SocialButton>
    </Links>
  );
};
