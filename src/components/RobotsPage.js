import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'; 

import RobotsList from './RobotList';
import RobotDetail from './RobotDetail';
import banner from '../assets/robot-banner.png'; 

const ROBOTS_URL = "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json";

function RobotsPage() {
  // Se elimina el hook useTranslation()
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch(ROBOTS_URL)
      .then(res => res.json())
      .then(data => {
        setRobots(data);
        if (data && data.length > 0) {
            setSelectedRobot(data[0]);
        }
      })
      .catch(error => {
        console.error("Hubo un error al obtener los robots:", error);
      });
  }, []);

  return (
    <Container className="mt-4">
        <Card>
            <Card.Header className="p-0">
                <Image src={banner} fluid />
            </Card.Header>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1><FormattedMessage id="headerTitle" /></h1>
                </div>
                <Row>
                    <Col md={8} lg={7}>
                        <RobotsList robots={robots} onRobotSelect={setSelectedRobot} />
                    </Col>
                    <Col md={4} lg={5}>
                        {selectedRobot && <RobotDetail robot={selectedRobot} />}
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">
              Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
            </Card.Footer>
        </Card>
    </Container>
  );
}

export default RobotsPage;