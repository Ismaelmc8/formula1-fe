import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card, Form, CloseButton} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import { LeagueDataRequest } from './LeaguesRequests';
import './leagues.css';
import PopupCreate from '../../components/popup-create/PopupCreate';

function Leagues() {
  const navigate = useNavigate();
  const [createPopUp, setCreatePopUp] = useState(false);
  const [joinPopUp, setJoinPopUp] = useState(true);
  /** REQUESTS */
  let createRequestURL = '/league';
  /** ROUTES */
  let routeLeague = '/league';

  const handleCancel = (value) => {
    setCreatePopUp(value); // Set the joinPopUp state to the provided value
  };
  const handleCreateLeagueClick = () => {
    setCreatePopUp(true); // Set createPopUp to true when the button is clicked
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className='text-center col-6 mx-auto p-5 m-5'>
            <Card.Title className='m-5 mt-4'><h3>Empieza creando tu propia liga</h3></Card.Title>
            <Card.Text>
              Crea tu propia lia, busca tus amigos y juntalos para decidir quien es el más acertado
            </Card.Text>
            <Card.Text>
              Crea la tuya o únete con un código
            </Card.Text>
            <Col className='text-center mt-4'>
                <Button variant='success' className='mx-2' onClick={handleCreateLeagueClick}>
                  Create League <AiOutlinePlus/>
                </Button>
                <Button variant='dark' className='mx-2'>
                  Unirse con código
                </Button>
              </Col>
          </Card>
        </Col>
      </Row>
      {createPopUp ? <PopupCreate apiUrl={createRequestURL} onCancel={handleCancel} onCreate={createRequestURL}/> : null}
    </Container>
  )
}

export default Leagues