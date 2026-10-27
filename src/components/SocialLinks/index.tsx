import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/RafaelBiatoAzevedo", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rafael-azevedo-530889195", icon: FaLinkedinIn },
  { name: "Instagram", href: "https://www.instagram.com/rafael_azevedo_55", icon: FaInstagram },
  { name: "WhatsApp", href: "https://wa.me/5519990197883", icon: FaWhatsapp },
];

export const SocialLinks = () => (
  <div className="social-links">
    {socials.map(({ name, href, icon: Icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon /></a>)}
  </div>
);
