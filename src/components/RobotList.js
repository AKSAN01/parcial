import React from 'react';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'; 

function RobotsList({ robots, onRobotSelect }) {
  

  if (!Array.isArray(robots) || robots.length === 0) {
    return <p>Cargando lista de robots...</p>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th><FormattedMessage id="tableId" /></th>
          <th><FormattedMessage id="tableName" /></th>
          <th><FormattedMessage id="tableModel" /></th>
          <th><FormattedMessage id="tableManufacturer" /></th>
        </tr>
      </thead>
      <tbody>
        {robots.map(robot => (
          <tr key={robot.id} onClick={() => onRobotSelect(robot)} style={{ cursor: 'pointer' }}>
            <td>{robot.id}</td>
            <td>{robot.nombre}</td>
            <td>{robot.modelo}</td>
            <td>{robot.empresaFabricante}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RobotsList;