import React, { useEffect, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="mr-auto">
          Tyler Stambaugh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mx-2">
            <Nav.Link href="./assets/documents/ResumeTylerJosephStambaugh.pdf">
              <FontAwesomeIcon icon={faFilePdf} size="2x" />
            </Nav.Link>
            {socials.map((item, index) => (
              <Nav.Link href={item.url}>
                <FontAwesomeIcon icon={item.icon} size="2x" />{" "}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="#login">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

//   {/* Add a link for downloading your resume */}
//   <a
//     href="./assets/documents/ResumeTylerJosephStambaugh.pdf"
//     download="ResumeTylerJosephStambaugh.pdf"
//     style={{ marginRight: "15px" }}
//   >
//     <FontAwesomeIcon icon={faFilePdf} size="2x" />
//   </a>
//   {socials.map((item, index) => (
//     <a key={index} href={item.url} style={{ marginRight: "15px" }}>
//       {" "}
//       <FontAwesomeIcon icon={item.icon} size="2x" />{" "}
//     </a>
