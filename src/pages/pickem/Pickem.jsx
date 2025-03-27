import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card, Form, CloseButton, Button} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import { PickemRequest } from './PickemRequests';
import SettingsIcon from '@mui/icons-material/Settings';
import './Pickem.css';

function Pickem() {
  const { leagueUuid } = useParams(); 
  const [pilots, setPilots] = useState([
    { id: 1, firstName: 'Lewis', lastName: 'Hamilton', number: 44 },
    { id: 2, firstName: 'Max', lastName: 'Verstappen', number: 33 },
    { id: 3, firstName: 'Charles', lastName: 'Leclerc', number: 16 },
  ]);

  const [selectedPilots, setSelectedPilots] = useState([{}, {}, {}]);

  const handlePilotSelect = (selectedPilot) => {
    const emptySlotIndex = selectedPilots.findIndex(pilot => Object.keys(pilot).length === 0);
    if (emptySlotIndex !== -1 && !selectedPilots.some(pilot => pilot.id === selectedPilot.id)) {
      const newSelectedPilots = [...selectedPilots];
      newSelectedPilots[emptySlotIndex] = selectedPilot;
      setSelectedPilots(newSelectedPilots);
    }
  };

  const sortedPilots = selectedPilots.map((pilot, index) => ({
    ...pilot,
    displayOrder: index + 1,
  })).sort((a, b) => a.displayOrder - b.displayOrder);

  const handleRemovePilot = (id) => {
    setSelectedPilots(selectedPilots.map(pilot => pilot.id === id ? {} : pilot));
  };

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
              {Object.keys(sortedPilots[1]).length > 0 ? (
                <>
                  {`${sortedPilots[1]?.firstName ?? ''} ${sortedPilots[1]?.lastName ?? ''}`}
                  {sortedPilots[1].id ?
                  <Button variant="link" onClick={() => handleRemovePilot(sortedPilots[1].id)}>
                  X
                </Button>
                 :
                 <></> 
                 }
                  
                </>
              ) : (
                <div className="empty-slot">Empty</div>
              )}
            </div>
          )}
        </Col>
        {/* First position */}
        <Col xs={4} className="text-center">
          <div style={{ marginBottom: '10px' }}>1st</div>
          {sortedPilots[0] && (
            <div className="selected-pilot">
              {Object.keys(sortedPilots[0]).length > 0 ? (
                <>
                {`${sortedPilots[0]?.firstName ?? ''} ${sortedPilots[0]?.lastName ?? ''}`}
                {sortedPilots[0].id ?
                  <Button variant="link" onClick={() => handleRemovePilot(sortedPilots[0].id)}>
                    X
                  </Button>
                  :
                  <></> 
                }
                </>
              ) : (
                <div className="empty-slot">Empty</div>
              )}
              </div>
          )}
        </Col>
        {/* Third position */}
        <Col xs={4} className="text-center">
          <div style={{ marginBottom: '10px' }}>3rd</div>
          {sortedPilots[2] && (
            <div className="selected-pilot">
              {Object.keys(sortedPilots[2]).length > 0 ? (
                <>
                {`${sortedPilots[2]?.firstName ?? ''} ${sortedPilots[2]?.lastName ?? ''}`}
                {sortedPilots[2].id ?
                  <Button variant="link" onClick={() => handleRemovePilot(sortedPilots[2].id)}>
                    X
                  </Button>
                  :
                  <><div className="empty-slot"></div></> 
                }
                </>
              ) : (
                <div className="empty-slot">Empty</div>
              )}
            </div>
          )}
        </Col>
        <Col className='text-center mt-4'>
          <Button variant='success' className='mx-2'>
            Save
          </Button>
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
              </tr>
            </thead>
            <tbody>
              {pilots.map(pilot => (
              <tr key={pilot.id} onClick={() => handlePilotSelect(pilot)} style={{cursor: 'pointer'}}>
                <td>{pilot.firstName} {pilot.lastName} </td>
                <td>{pilot.number}</td>
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