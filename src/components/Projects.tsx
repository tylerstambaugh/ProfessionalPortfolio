import React, { useEffect, useState } from "react";
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
  imageSrc: string;
};

export default function Projects() {
  const [showBack, setShowBack] = useState<{ [key: string]: boolean }>({});

  const loadImageSrc = async (imagePath: string): Promise<string> => {
    const { default: imageSrc } = await import(`../assets/images/${imagePath}`);
    return imageSrc;
  };
  const [projects, setProjects] = useState<project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      setProjects([
        {
          id: uuidv4(),
          title: "Segment Sniper",
          shortDescription:
            "A .Net Web API / React project that integrates with Strava to allow athletes to analyze workout data efficiently.",
          imageSrc: await loadImageSrc("segmentSniperScreenshot.png"),
          longDescription: (
            <>
              <p>
                I've been an bicycle racer for many years and have user Strava
                to track my performance. When I got into writing software and
                found out that they had an open API, I began writing a companion
                app to automate a routine data analysis task.
              </p>
              <br />
              <p>
                This tool allows users to interrogate data from their activities
                and find segments where they are close to the leader.
              </p>
              <br />
              <p>It is built using:</p>
              <ul>
                <li>
                  .Net 7 Web API backend on SQL Server via Entity Framework
                </li>
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
          imageSrc: await loadImageSrc("efa.png"),
          longDescription: "long description text goes here",
        },
        {
          id: uuidv4(),
          title: "Mario Kart Kup Skorer",
          shortDescription:
            "A .Net Web API / MVC application used to solve the real world problems of tracking Mario Kart Kup scoring across game sessions.",
          imageSrc: await loadImageSrc("mkKupSkorer.png"),
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
          imageSrc: await loadImageSrc("exercismScreenshot.png"),
          longDescription: "long description text goes here",
        },
      ]);
    };

    loadProjects();
  }, []);

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
          {projects.map((item, index) =>
            index % 2 === 0 ? (
              <Row>
                <Col key={item.id} md={5} lg={6} sm={12} xl={6} xxl={6}>
                  <Card>
                    <Card.Header>{item.title}</Card.Header>
                    {showBack[item.id] ? (
                      <Card.Img variant="top" src={item.imageSrc} />
                    ) : (
                      <></>
                    )}
                    <Card.Body>
                      {showBack[item.id] ? (
                        <Card.Text>{item.longDescription}</Card.Text>
                      ) : (
                        <Card.Text>{item.shortDescription}</Card.Text>
                      )}
                    </Card.Body>
                    <Button onClick={() => toggleShowReverse(item.id)}>
                      {showBack[item.id] ? "More" : "Less"}
                    </Button>
                  </Card>
                </Col>
              </Row>
            ) : (
              <Col key={item.id} md={5} lg={6} sm={12} xl={6} xxl={6}>
                <Card>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Img variant="top" src={item.imageSrc} />
                  <Card.Body>
                    {showBack[item.id] ? (
                      <Card.Text>{item.longDescription}</Card.Text>
                    ) : (
                      <Card.Text>{item.shortDescription}</Card.Text>
                    )}
                  </Card.Body>
                  <Button onClick={() => toggleShowReverse(item.id)}>
                    {showBack[item.id] ? "More" : "Less"}
                  </Button>
                </Card>
              </Col>
            )
          )}
        </Container>
      </FullScreenSection>
    </>
  );
}
