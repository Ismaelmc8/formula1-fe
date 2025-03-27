import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card, Form, CloseButton} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import { LeaguesData, LeaguesCreate, JoinLeague } from './LeaguesRequests';
import './leagues.css';
import PopupCreate from '../../components/popup-create/PopupCreate';
import LeaguesTable from './LeaguesTable';

function Leagues() {
  const navigate = useNavigate();
  const [leaguesData, setLeaguesData] = useState([]);
  const [createPopUp, setCreatePopUp] = useState(false);
  const [joinPopUp, setJoinPopUp] = useState(false);
  /** ROUTES */
  let routeLeague = '';

  const handleCancel = (value) => {
    setCreatePopUp(value); // Set the joinPopUp state to the provided value
  };
  const handleCreateLeagueClick = () => {
    setCreatePopUp(true); // Set createPopUp to true when the button is clicked
  };
  const handleCancelFollow = (value) => {
    setJoinPopUp(value); // Set the joinPopUp state to the provided value
  };
  const handleFollowLeagueClick = () => {
    setJoinPopUp(true); // Set createPopUp to true when the button is clicked
  };

  const ajaxCreateLeague = async (leagueName) => {
    try {
      const data = await LeaguesCreate({ name: leagueName });
      // If the request is successful
      setCreatePopUp(false);
      // Handle the response as needed
      navigate('/league/'+ data.league); 
    }catch(error){
      // If there's an error
      console.error('Request failed:', error);
    }
  }
  const ajaxJoinLeague = async (code) => {
    try {
      const data = await JoinLeague(code);
      // If the request is successful
      setCreatePopUp(false);
      console.log(data);
      // Handle the response as needed
      // navigate('/league/'+ data.league); 
    }catch(error){
      // If there's an error
      console.error('Request failed:', error);
    }
  }
  const texts = {
    popup1: {
      title: 'Crear una Liga',
      subtitle: 'Crea una liga e invita a tus amigos',
      inputTitle: 'Nombre de la liga:',
      accept: 'Create',
      cancel: 'Cancelar'
    },
    popup2: {
      title: 'Unirte una Liga',
      subtitle: '¿Listo para unirte a una liga?',
      inputTitle: 'Código de la liga:',
      accept: 'Unirse',
      cancel: 'Cancelar'
    }
  };


  useEffect(() => {
    async function fetchData() {
      try {
        // Realiza la solicitud de datos de las ligas
        const data = await LeaguesData();
        setLeaguesData(data);
      } catch (error) {
        console.error('Request failed:', error);
      }
    }
    fetchData(); // Llama a la función fetchData al montar el componente
  }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, al montar el componente
 

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
                <Button variant='dark' className='mx-2' onClick={handleFollowLeagueClick}>
                  Unirse con código <AiOutlinePlus/>
                </Button>
              </Col>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <LeaguesTable leaguesData={leaguesData} />
        </Col>
      </Row>
       {createPopUp ? <PopupCreate text={texts.popup1} apiUrl={'/leagues'} onCancel={handleCancel} onAccept={ajaxCreateLeague}/> : null} 
       {joinPopUp ? <PopupCreate text={texts.popup2} apiUrl={'/leagues'} onCancel={handleCancelFollow} onAccept={ajaxJoinLeague}/> : null} 
    </Container>
  )
}

export default Leagues