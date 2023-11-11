import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FullScreenSection from "./FullScreenSection";
import segmentSniperImg from "../assets/images/segmentSniperScreenshot.png";
import { v4 as uuidv4 } from "uuid";
import efaImage from "../assets/images/efa.png";
import mkKupSkorerImage from "../assets/images/mkKupSkorer.png";
import exercismImage from "../assets/images/exercismScreenshot.png";

type project = {
  id: string;
  title: string;
  shortDescription: string | JSX.Element;
  longDescription: string | JSX.Element;
  getImageSrc: () => string;
};

export default function Projects() {
  const [showBack, setShowBack] = useState<{ [key: string]: boolean }>({});
  const projects: project[] = [
    {
      id: uuidv4(),
      title: "Segment Sniper",
      shortDescription:
        "A .Net Web API / React project that integrates with Strava to allow athletes to analyze workout data efficiently.",
      getImageSrc: () =>
        require("../assets/images/segmentSniperScreenshot.png"),
      longDescription: (
        <>
          <p>
            I've been an bicycle racer for many years and have user Strava to
            track my performance. When I got into writing software and found out
            that they had an open API, I began writing a companion app to
            automate a routine data analysis task.
          </p>
          <br />
          <p>
            This tool allows users to interrogate data from their activities and
            find segments where they are close to the leader.
          </p>
          <br />
          <p>It is built using:</p>
          <ul>
            <li>.Net 7 Web API backend on SQL Server via Entity Framework</li>
            <li>Vite React frontend using Typescript</li>
            <li>Custom JWT authentication and authorization</li>
            <li>SOA adhering to SOLID principles</li>
          </ul>
        </>
      ),
    },
    {
      id: uuidv4(),
      title: "Eleven Fifty Academy",
      shortDescription: `In May of 2022 I completed Eleven Fifty Academy's Software Development Course. This entailed over 600 hours of course 
            instruction and lab time learning to build and maintain .Net applications. It was a fantastic experience that allowed 
            me to rapidly build on the knowledge I'd gained over the years working with software engineers and transition to
             software engineering.`,
      getImageSrc: () => require("../assets/images/efa.png"),
      longDescription: "long description text goes here",
    },
    {
      id: uuidv4(),
      title: "Mario Kart Kup Skorer",
      shortDescription:
        "A .Net Web API / MVC application used to solve the real world problems of tracking Mario Kart Kup scoring across game sessions.",
      getImageSrc: () => require("../assets/images/mkKupSkorer.png"),
      longDescription: "long description text goes here",
    },
    {
      id: uuidv4(),
      title: "Exercism-ing",
      shortDescription: (
        <span>
          I continue to hone my skills and learn new ones by routinely
          completing coding katas on Exercism.org. You can see my progress{" "}
          <a href="https://exercism.org/profiles/tylerstambaugh">here</a>
        </span>
      ),
      getImageSrc: () => require("../assets/images/exercismScreenshot.png"),
      longDescription: "long description text goes here",
    },
  ];

  const toggleShowReverse = (projectId: string) => {
    setShowBack((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  return (
    <>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#14532d"
        id="projects"
      >
        <Container>
          <Row>
            {projects.map((item) =>
              showBack[item.id] ? (
                <Col key={item.id} md={6} lg={6} sm={12} xl={6} xxl={6}>
                  <Card>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Img variant="top" src={item.getImageSrc()} />

                    <Card.Body>
                      <Card.Text>{item.shortDescription}</Card.Text>
                    </Card.Body>
                    <Button onClick={() => toggleShowReverse(item.id)}>
                      More
                    </Button>
                  </Card>
                </Col>
              ) : (
                <Col key={item.id}>
                  <Card>
                    <Card.Header>{item.title}</Card.Header>

                    <Card.Body>
                      <Card.Text>{item.longDescription}</Card.Text>
                    </Card.Body>
                    <Button onClick={() => toggleShowReverse(item.id)}>
                      Less
                    </Button>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </FullScreenSection>
    </>
  );
}
