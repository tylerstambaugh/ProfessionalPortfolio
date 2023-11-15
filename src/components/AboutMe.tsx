import FullScreenSection from "./FullScreenSection";
import Headshot from "../assets/images/headshot_sized.png";
import { Col, Container, Row, Image } from "react-bootstrap";

const greeting = "Howdy, I am Tyler!";
const bio1 = `Indiana native with an early tech spark – my journey kicked off with a garage sale gem, a Commodore 64, sparking a lifelong love for technology. 
   While at Indiana University, I earned a B.S. in Informatics, delving into the tech landscape. I began my professional career in tech support, working with 
   client-server applications and databases. Over time, I progressed to become a Software Engineer, specializing in .Net and React projects. To further my skills, 
   I completed over 600 hours of coursework at Eleven Fifty Academy. In my free time, I'm working on a full-stack application.  Eager to explore process automation and enhance my software engineering prowess,
    I strive to make meaningful impacts in every organization I'm part of.  Explore some of my projects below.`;

export default function AboutMe() {
  return (
    <>
      <FullScreenSection
        isDarkBackground
        fullScreen={true}
        backgroundColor="#1c3149"
        id="aboutMe"
      >
        <Container className="justify-content-center">
          <Row className="headshot pb-2 mx-auto">
            <Image src={Headshot} roundedCircle={true} />
          </Row>
          <Row className="text-center">
            <Col className=" about-me-greeting">{greeting}</Col>
          </Row>
          <Row>
            <Col className="about-me-text">{bio1}</Col>
          </Row>
        </Container>
      </FullScreenSection>
    </>
  );
}
