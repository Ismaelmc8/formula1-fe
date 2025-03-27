import React, { useState, useEffect } from 'react';
import { Table, Button, CloseButton} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { LeaguesData, LeagueDataByUuid } from './LeaguesRequests';
import './leagues.css';

function LeaguesTable(props) {
  const navigate = useNavigate();

  const handleEntrarClick = (uuid) => {
    navigate('/league/'+uuid);
  };

  // useEffect(() => {
  //   if (leaguesData) {
  //     // Si hay datos de ligas, podemos mapearlos para renderizar una lista con botones para cada liga
  //     // También puedes ajustar esto según tu estructura de datos de liga
  //     leaguesData.forEach(league => {
  //       // Realiza la petición para obtener los detalles de cada liga
  //       LeagueDataByUuid(league.id)
  //         .then((data) => {
  //           // Una vez que se obtienen los detalles de la liga, actualizamos el estado
  //           console.log(1)
  //           setLeagueDetails(data);
  //         })
  //         .catch((error) => {
  //           console.error('Request failed:', error);
  //         });
  //     });
  //   }
  // }, [leaguesData]);
  return (
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
        {
          props.leaguesData.map(league => (
            <tr key={league.uuid}>
              <td>
              {league.name}
              </td>
          <th>{league.first ?? '-'}</th>
          <th>{league.second ?? '-'}</th>
          <th>{league.third ?? '-'}</th>
              {/* Renderiza el nombre de la liga */}
              {/* Renderiza un botón para entrar a la liga */}
          <td className="vertical-center "><Button variant="success" className='mx-2'size="sm" onClick={() => handleEntrarClick(league.uuid)}>Entrar</Button><CloseButton /></td>
            </tr>
          ))
        }
        {/* <tr>
          <td className="align-middle">Pepito</td>
          <td className="align-middle">Hernesto</td>
          <td className="align-middle">Hernesto2</td>
          <td className="align-middle">Hernesto3</td>
        </tr> */}
      </tbody>
    </Table>
  )
}
export default LeaguesTable