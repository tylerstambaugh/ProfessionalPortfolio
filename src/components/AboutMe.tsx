import FullScreenSection from "./FullScreenSection";
import Headshot from "../assets/images/headshot_sized.png";
import { Col, Container, Row, Stack, Image } from "react-bootstrap";
import "../App.css";

const greeting = "Howdy, I am Tyler!";
const bio1 =
  "Born and raised in Indiana, my interest in technology developed early when I got a used Commodore 64 from a garage sale and began interacting with a terminal. The hobby grew into a passion while I attended Indiana University, getting a B.S. in Informatics. My professional career started by answering phones, providing tech support for a a client-server application where I cut my teeth working with databases and getting exposed to the SDLC. Since then I've steadily progressed my way through the landscape, having currently established myself as Software Engineer, primarily focused on .Net and React projects. To grow my capabilities I spent over 600 hours of course instruction and self study to graduate from Eleven Fifty Academy's Software Development Course. Now I'm continuing to grow my tool set and hone my skills working on my own full stack application in my free time. I look forward to continuing my understanding of process automation and software engineering in order to make positive impacts for the organizations that I'm a part of.";

export default function AboutMe() {
  return (
    <>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#2A4365"
        id="aboutMe"
      >
        <Container className="justify-content-center">
          <Row className="headshot pb-2 mx-auto">
            <Image src={Headshot} roundedCircle={true} />
          </Row>
          <Row>{greeting}</Row>
          <Row>
            <Col className="about-me-text" lg={12}>
              {bio1}
            </Col>
          </Row>
        </Container>
      </FullScreenSection>
    </>
  );
}
