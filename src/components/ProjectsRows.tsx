import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { project } from "./Projects";

type projectRowprops = {
  data: project[];
};

export default function ProjectsRows(props: projectRowprops) {
  const [showBack, setShowBack] = useState<{ [key: string]: boolean }>({});
  const toggleShowReverse = (projectId: string) => {
    setShowBack((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  return (
    <Container fluid className="pt-3">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3">
        {props.data.map((item) => (
          <Col className="d-flex">
            <Card className="w-100">
              <Card.Header className="cardHeader">{item.title}</Card.Header>
              {!showBack[item.id] ? (
                <Card.Img
                  className="projectImage"
                  variant="top"
                  src={item.imageSrc}
                />
              ) : (
                <></>
              )}
              <Card.Body>
                {!showBack[item.id] ? (
                  <Card.Text>{item.shortDescription}</Card.Text>
                ) : (
                  <Card.Text>{item.longDescription}</Card.Text>
                )}
              </Card.Body>
              <Button onClick={() => toggleShowReverse(item.id)}>
                {!showBack[item.id] ? "More" : "Less"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
