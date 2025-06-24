import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Image } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl'; 
import banner from '../assets/robot-banner.png';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const intl = useIntl(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const success = onLogin(username, password);
    if (!success) {

      const errorMessage = intl.formatMessage({ id: 'loginError' });
      setError(errorMessage);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '40rem' }}>
        <Card.Header className="p-0">
          <Image src={banner} fluid />
        </Card.Header>
        <Card.Body>
          <Card.Title as="h2"><FormattedMessage id="headerTitle" /></Card.Title>
          <hr/>
          <Card.Title as="h4"><FormattedMessage id="loginTitle" /></Card.Title>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3 text-start" controlId="formUsername">
              <Form.Label><FormattedMessage id="loginUsername" /></Form.Label>
              <Form.Control 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
              />
            </Form.Group>

            <Form.Group className="mb-4 text-start" controlId="formPassword">
              <Form.Label><FormattedMessage id="loginPassword" /></Form.Label>
              <Form.Control 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="me-2">
              <FormattedMessage id="loginSubmit" />
            </Button>
            <Button variant="danger" type="button">
              <FormattedMessage id="loginCancel" />
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Login;