import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'; 

function RobotDetail({ robot }) {
  

  if (!robot) {
    return (
        <Card>
            <Card.Body>
                <Card.Text>Selecciona un robot para ver sus detalles.</Card.Text>
            </Card.Body>
        </Card>
    );
  }

  return (
    <Card>
      <Card.Header as="h4">{robot.nombre}</Card.Header>
      <Card.Img variant="top" src={robot.imagen} alt={`Imagen de ${robot.nombre}`} />
      <Card.Body className="text-start">
        <p>
          <strong><FormattedMessage id="detailYear" />:</strong> {robot.añoFabricacion}
        </p>
        <p>
          <strong><FormattedMessage id="detailCapacity" />:</strong> {robot.capacidadProcesamiento}
        </p>
        <p>
          <strong><FormattedMessage id="detailFeatures" />:</strong> {robot.humor}
        </p>
      </Card.Body>
    </Card>
  );
}

export default RobotDetail;