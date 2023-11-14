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
      {/* Large screens (3 columns x 2 rows) */}
      <Row className="d-none d-lg-flex pb-3 h-100">
        {props.data.map((item) => (
          <Col lg={4} key={item.id} className="projectCard h-100">
            <Card>
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

      {/* Medium screens (2 columns x 3 rows) */}
      <Row className="d-none d-md-flex d-lg-none pb-3 h-100">
        {props.data.map((item) => (
          <Col md={6} key={item.id} className="projectCard h-100">
            <Card>
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

      {/* Small screens (1 column x 6 rows) */}
      <Row className="d-flex d-md-none pb-3 h-100">
        {props.data.map((item) => (
          <Col key={item.id} className="projectCard h-100">
            <Card>
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
