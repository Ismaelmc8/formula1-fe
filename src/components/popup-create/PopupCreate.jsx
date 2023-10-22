import React, { useState } from 'react';
import './popupCreate.css';
import { createRequest } from './popupRequests';

import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap'

const PopupCreate = ({ apiUrl, onCancel }) => {
  const [leagueName, setLeagueName] = useState('');

  const handleLeagueNameChange = (event) => {
    setLeagueName(event.target.value);
  };

  const handleCreateButtonClicked = () => {
    if (leagueName) {
      // Call the createRequest function with the apiUrl and form data
      createRequest('get',apiUrl, { league: leagueName })
        .then((data) => {
          // Handle the response as needed
          console.log('Request succeeded:', data);
        })
        .catch((error) => {
          // Handle any errors
          console.error('Request failed:', error);
        });
    }
  };
  const handleCancelButtonClicked = () => {
    // Call the onCancel function passed as a prop to set a variable to false
    onCancel(false);
  };

  return (
    <>
    <Row className='popup-card'>
        <Col className='width-popup-slim mx-auto'>
          <Card className='text-center p-5'>
            <Card.Title className='mb-4'>Crear una Liga</Card.Title>
            <Card.Subtitle className='mb-2'>Cre una liga e invita a tus amigos</Card.Subtitle>
            <Form className='text-start'>
              <Form.Group className='mb-3'>
                <Form.Label>Nombre de la liga:</Form.Label>
                <Form.Control
                 type='text'
                 value={leagueName}
                 onChange={handleLeagueNameChange} />
              </Form.Group>
              <Row>
                <Col className='d-grid'>
                  <Button variant='danger' onClick={handleCancelButtonClicked}>
                    Cancel
                  </Button>
                </Col>
                <Col className='d-grid'>
                  <Button variant='success' onClick={handleCreateButtonClicked}>
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PopupCreate