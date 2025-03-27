import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card, Form, CloseButton} from 'react-bootstrap';
import { Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import { PickemRequest } from './PickemRequests';
import SettingsIcon from '@mui/icons-material/Settings';
import './Pickem.css';

function Pickem() {
  const { leagueUuid } = useParams(); // Use the useParams hook with leagueUuid
  const [pilots, setPilots] = useState([
    { id: 1, firstName: 'Lewis', lastName: 'Hamilton', number: 44 },
    { id: 2, firstName: 'Max', lastName: 'Verstappen', number: 33 },
    { id: 3, firstName: 'Charles', lastName: 'Leclerc', number: 16 },
    // Agrega más pilotos según sea necesario
  ]);

  const [selectedPilots, setSelectedPilots] = useState([]);

  const handlePilotSelect = (selectedPilot) => {
    if (selectedPilots.length < 3 && !selectedPilots.some(pilot => pilot.id === selectedPilot.id)) {
      setSelectedPilots([...selectedPilots, selectedPilot]);
    }
  };


  const handleRemovePilot = (id) => {
    let aux = [];
    selectedPilots.forEach((element) => {

      console.log(element)
      if(element.id === id){
        aux.push({})
      }else{
        aux.push(element)
      }
    });
    console.log(aux);
    console.log(selectedPilots.filter(p => p.id !== id));
    setSelectedPilots(aux);
  };

  
  const sortedPilots = selectedPilots.map((pilot, index) => ({
    ...pilot,
    displayOrder: index + 1,
  })).sort((a, b) => a.displayOrder - b.displayOrder);


/*
  const handleCreateButtonClicked = () => {
    let data = {classification : [
      {number : 24 , name :  'Max', apellido : 'Verstappen'},
      {number : 25 ,name :  'Fernando', apellido : 'Alonso'}
    ]}
    setdriversData(data);
  }
  
  useEffect(() => {
    // Fetch league data based on leagueUuid using LeagueDataRequest
    const fetchData = async () => {
      try {
        const data = await PickemRequest(leagueUuid);
        setdriversData(data);
      } catch (error) {
        handleCreateButtonClicked();
        console.error('Error fetching league data:', error);
      }
    };

    fetchData();
  }, [leagueUuid]);
*/

  const navigate = useNavigate();
  
  return (
    <Container>
      <Row className='p-5 mb-4'>
        <Col>
          <h1>Select drivers</h1>
        </Col>
      </Row>
      
      <Row className='p-5 mb-4 justify-content-center'>
        {/* Second position */}
        <Col xs={4} className="text-center">
          <div style={{ marginBottom: '10px' }}>2nd</div>
          {sortedPilots[1] && (
            <div className="selected-pilot">
              {Object.keys(sortedPilots[1]).length > 0 && (
                <>
                  {`${sortedPilots[1]?.firstName} ${sortedPilots[1]?.lastName}`}
                  <Button variant="danger" onClick={() => handleRemovePilot(sortedPilots[1].id)}>
                    X
                  </Button>
                </>
              )}
            </div>
          )}
        </Col>
        {/* First position */}
        <Col xs={4} className="text-center">
          <div style={{ marginBottom: '10px' }}>1st</div>
          {sortedPilots[0] && (
            <div className="selected-pilot">
              {Object.keys(sortedPilots[0]).length > 0 && (
                <>
                  {`${sortedPilots[0]?.firstName} ${sortedPilots[0]?.lastName}`}
                  <Button variant="danger" onClick={() => handleRemovePilot(sortedPilots[0]?.id)}>
                    X
                  </Button>
                </>
              )}
            </div>
          )}
        </Col>
        {/* Third position */}
        <Col xs={4} className="text-center">
          <div style={{ marginBottom: '10px' }}>3rd</div>
          {sortedPilots[2] && (
            <div className="selected-pilot">
              {Object.keys(sortedPilots[2]).length > 0 && (
                <>
                  {`${sortedPilots[2]?.firstName ?? ''} ${sortedPilots[2]?.lastName ?? ''}`}
                  {sortedPilots[2]?.id}
                  <Button variant="danger" onClick={() => handleRemovePilot(sortedPilots[2]?.id)}>
                    X
                  </Button>
                </>
              )}
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
        { pilots?.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Numero</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {pilots.map(pilot => (
              <tr key={pilot.id} onClick={() => handlePilotSelect(pilot)}>
                <td>{pilot.firstName} {pilot.lastName} </td>
                <td>{pilot.number}</td>
                {/* Populate more cells based on the item properties */}
              </tr>
            ))}
            </tbody>
          </Table>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Pickem