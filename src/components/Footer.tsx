import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const socials = [
  { icon: faGithub, url: "https://github.com/tylerstambaugh", label: "GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/tyler-stambaugh-b274a59/", label: "LinkedIn" },
  { icon: faPuzzlePiece, url: "https://exercism.org/profiles/tylerstambaugh", label: "Exercism" },
  { icon: faEnvelope, url: "mailto:tyler.stambaugh@icloud.com", label: "Email" },
];

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Let's Connect</h2>
          <p className="contact-prompt">
            Interested in working together or just want to say hello? Feel free to
            reach out.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:tyler.stambaugh@icloud.com"
              className="contact-btn contact-btn-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email Me
            </a>
            <a
              href="./documents/ResumeTylerStambaugh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-secondary"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer Bar */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-socials">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={item.label}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Tyler Stambaugh. All rights reserved.
          </p>
          <a href="#hero" className="footer-top-link">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
