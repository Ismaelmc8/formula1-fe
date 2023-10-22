import React, { useState } from 'react';
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
  let createRequestURL = 'league';
  /** ROUTES */
  let routeLeague = '/league/home';

  const handleCancel = (value) => {
    setCreatePopUp(value); // Set the joinPopUp state to the provided value
  };
  const handleCreateLeagueClick = () => {
    setCreatePopUp(true); // Set createPopUp to true when the button is clicked
  };
  const handleEntrarClick = (uuid) => {
    
    // Realiza la petición aquí, por ejemplo, usando Axios o fetch.
    LeagueDataRequest(uuid)
    .then((data) => {
      // Handle the response as needed
      console.log('Request succeeded:', data);
      // Cuando la petición tenga éxito, navega a la nueva ruta.
      navigate(routeLeague); // Reemplaza '/nueva-ruta' con la ruta a la que deseas navegar.
    })
    .catch((error) => {
      // Handle any errors
      console.error('Request failed:', error);
    });
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
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Nombre de la liga</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">Pepito</td>
                <td className="align-middle">Hernesto</td>
                <td className="align-middle">Hernesto2</td>
                <td className="align-middle">Hernesto3</td>
                <td className="vertical-center "><Button variant="success" className='mx-2'size="sm" onClick={() => handleEntrarClick(1)}>Entrar</Button><CloseButton /></td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col>COL 1</Col>
          </Row>
        </Col>
      </Row>
      {createPopUp ? <PopupCreate apiUrl={createRequestURL} onCancel={handleCancel} /> : null}
    </Container>
  )
}

export default Leagues