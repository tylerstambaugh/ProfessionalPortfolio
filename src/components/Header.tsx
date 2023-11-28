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
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 992);
      // console.log("isCollapsed", isCollapsed);
      // console.log("window.innerWidth", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize(); // To set initial state on load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        className=""
      >
        <Container>
          <Navbar.Text className="navbar-brand-text justify-content-start">
            Tyler Stambaugh
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {!isCollapsed ? (
            <>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-center"
              >
                <Nav className="justify-content-center">
                  <Nav.Link
                    href="./documents/ResumeTylerStambaugh.pdf"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faFilePdf} size="2x" />
                  </Nav.Link>
                  {socials.map((item, index) => (
                    <Nav.Link href={item.url} key={index} target="blank">
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
              <Nav className="justify-content-end">
                <Nav.Link href="#aboutMe">About</Nav.Link>
                {" | "}
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="justify-content-end ">
                <Nav.Link href="#aboutMe">About</Nav.Link>
                {" | "}
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-center"
              >
                <Nav className="justify-content-center">
                  <Nav.Link
                    href="./documents/ResumeTylerStambaugh.pdf"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faFilePdf} size="2x" />
                  </Nav.Link>
                  {socials.map((item, index) => (
                    <Nav.Link href={item.url} key={index} target="blank">
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}
