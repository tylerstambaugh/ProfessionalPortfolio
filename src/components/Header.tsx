import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const socials = [
    {
      icon: faGithub,
      url: "https://github.com/tylerstambaugh",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/tyler-stambaugh-b274a59/",
    },
    {
      icon: faPuzzlePiece,
      url: "https://exercism.org/profiles/tylerstambaugh",
    },
    {
      icon: faEnvelope,
      url: "mailto: tyler.stambaugh@icloud.com",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const faIconSize = windowWidth < 350 ? "1x" : "2x";
  const navbarBrandTextSize = windowWidth < 440 ? "small-text" : "";
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="light"
        variant="light"
        className=""
      >
        <Container>
          <Navbar.Text
            className={`navbar-brand-text justify-content-start ${navbarBrandTextSize}`}
          >
            Tyler Stambaugh
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="d-flex flex-row justify-content-around">
                <Nav.Link
                  href="./documents/ResumeTylerStambaugh.pdf"
                  target="blank"
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faFilePdf} size={faIconSize} />
                </Nav.Link>
                {socials.map((item, index) => (
                  <Nav.Link
                    href={item.url}
                    key={index}
                    target="blank"
                    className="mr-2"
                  >
                    <FontAwesomeIcon icon={item.icon} size={faIconSize} />
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </>
        </Container>
      </Navbar>
    </>
  );
}
