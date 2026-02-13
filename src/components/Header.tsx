import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  { icon: faGithub, url: "https://github.com/tylerstambaugh", label: "GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/tyler-stambaugh-b274a59/", label: "LinkedIn" },
  { icon: faPuzzlePiece, url: "https://exercism.org/profiles/tylerstambaugh", label: "Exercism" },
  { icon: faEnvelope, url: "mailto:tyler.stambaugh@icloud.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const socialIcons = (
    <div className="nav-socials">
      <a
        href="./documents/ResumeTylerStambaugh.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-social-link"
        aria-label="Resume"
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </a>
      {socials.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-link"
          aria-label={item.label}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          Tyler Stambaugh
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-socials-desktop">{socialIcons}</div>

        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
        {socialIcons}
      </div>
    </motion.nav>
  );
}
