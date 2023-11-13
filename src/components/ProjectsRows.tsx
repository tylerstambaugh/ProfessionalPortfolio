import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { project } from "./Projects";

export default function ProjectsRows(projects: project[]) {
  const [showBack, setShowBack] = useState<{ [key: string]: boolean }>({});
  const toggleShowReverse = (projectId: string) => {
    setShowBack((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const createRows = () => {
    const rows = [];

    {
      for (let i = 0; i < projects.length; i += 2)
        rows.push(
          <Row>
            <Col key={projects[i].id} md={5} lg={6} sm={12} xl={6} xxl={6}>
              <Card>
                <Card.Header>{projects[i].title}</Card.Header>
                {showBack[projects[i].id] ? (
                  <Card.Img variant="top" src={projects[i].imageSrc} />
                ) : (
                  <></>
                )}
                <Card.Body>
                  {showBack[projects[i].id] ? (
                    <Card.Text>{projects[i].longDescription}</Card.Text>
                  ) : (
                    <Card.Text>{projects[i].shortDescription}</Card.Text>
                  )}
                </Card.Body>
                <Button onClick={() => toggleShowReverse(projects[i].id)}>
                  {showBack[projects[i].id] ? "More" : "Less"}
                </Button>
              </Card>
            </Col>
            {i + 1 < projects.length && (
              <Col key={projects[i].id} md={5} lg={6} sm={12} xl={6} xxl={6}>
                <Card>
                  <Card.Header>{projects[i].title}</Card.Header>
                  <Card.Img variant="top" src={projects[i].imageSrc} />
                  <Card.Body>
                    {showBack[projects[i].id] ? (
                      <Card.Text>{projects[i].longDescription}</Card.Text>
                    ) : (
                      <Card.Text>{projects[i].shortDescription}</Card.Text>
                    )}
                  </Card.Body>
                  <Button onClick={() => toggleShowReverse(projects[i].id)}>
                    {showBack[projects[i].id] ? "More" : "Less"}
                  </Button>
                </Card>
              </Col>
            )}
          </Row>
        );
    }
    return rows;
  };
  return <>{createRows()}</>;
}
