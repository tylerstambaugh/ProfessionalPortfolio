import FullScreenSection from "./FullScreenSection";
import Headshot from "../assets/images/headshot_sized.png";
import { Col, Container, Row, Stack, Image } from "react-bootstrap";
import "../App.css";

const greeting = "Howdy, I am Tyler!";
const bio1 = "A full stack developer";
const bio2 = "and exceptional problem solver";

export default function AboutMe() {
  return (
    <>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#2A4365"
        id="aboutMe"
      >
        <Image src={Headshot} roundedCircle={true} className="headshot" />
        <Container className="justify-content-center">
          <Row>{greeting}</Row>
          <Row>
            <Col>{bio1}</Col>
          </Row>
          <Row>
            <Col>{bio1}</Col>
          </Row>
        </Container>
      </FullScreenSection>
    </>
  );
}
