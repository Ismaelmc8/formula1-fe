import React, { useState } from 'react';
import './popupCreate.css';
import { createRequest } from './popupRequests';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap'

const PopupCreate = ({ text, apiUrl, onCancel, onAccept }) => {
  const [leagueName, setLeagueName] = useState('');
  const [createPopUp, setCreatePopUp] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook  

  const handleLeagueNameChange = (event) => {
    setLeagueName(event.target.value);
  };

  const handleAcceptButtonClicked = () => {
    // Call the onCreateButtonClick function passed as a prop
    if (leagueName) {
      onAccept(leagueName);
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
            <Card.Title className='mb-4'>{text.title}</Card.Title>
            <Card.Subtitle className='mb-2'>{text.subtitle}</Card.Subtitle>
            <Form className='text-start'>
              <Form.Group className='mb-3'>
                <Form.Label>{text.inputTitle}</Form.Label>
                <Form.Control
                 type='text'
                 value={leagueName}
                 onChange={handleLeagueNameChange} />
              </Form.Group>
              <Row>
                <Col className='d-grid'>
                  <Button variant='danger' onClick={handleCancelButtonClicked}>
                  {text.cancel}
                  </Button>
                </Col>
                <Col className='d-grid'>
                  <Button variant='success' onClick={handleAcceptButtonClicked}>
                    {text.accept}
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