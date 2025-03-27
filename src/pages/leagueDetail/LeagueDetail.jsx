import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card, Form, CloseButton} from 'react-bootstrap';
import { Chip } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import { LeagueDataRequest } from './LeagueDetailRequests';
import SettingsIcon from '@mui/icons-material/Settings';
import './leagueDetail.css';
import PopupCreate from '../../components/popup-create/PopupCreate';

function LeagueDetail() {
  const { leagueUuid } = useParams(); // Use the useParams hook with leagueUuid
  const [leagueData, setLeagueData] = useState([]);

  const handleCreateButtonClicked = () => {
    let data = {classification : [
      {name :  'Pepe', last_race : 2, puntos : 45},
      {name :  'Falete', last_race : 1, puntos : 43}
    ]}
    setLeagueData(data);
  }
  
  useEffect(() => {
    // Fetch league data based on leagueUuid using LeagueDataRequest
    const fetchData = async () => {
      try {
        const data = await LeagueDataRequest(leagueUuid);
        setLeagueData(data);
        console.log(data)
      } catch (error) {
        handleCreateButtonClicked();
        console.error('Error fetching league data:', error);
      }
    };

    fetchData();
  }, [leagueUuid]);

  const navigate = useNavigate();
  
  return (
    <Container>
      <Row className='p-5 mb-4'>
        <Col>
          <h1>Liga {leagueData?.league?.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chip label="Chip Filled" />
        </Col>
      </Row>
      <Row>
        <Col>
        { leagueData?.classification?.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Posicion</th>
                <th>Name</th>
                <th>Last Race</th>
                <th>Points</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
            {leagueData.classification.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.last_race}</td>
                <td>{item.puntos}</td>
                {/* Populate more cells based on the item properties */}
              </tr>
            ))}
            </tbody>
          </Table>
          ) : (
            <Table striped>
            <thead>
              <tr>
                <th>Posicion</th>
                <th>Name</th>
                <th>Last Race</th>
                <th>Points</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            
          </Table>
          )}
          <Row>
          <button onClick={handleCreateButtonClicked}></button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LeagueDetail