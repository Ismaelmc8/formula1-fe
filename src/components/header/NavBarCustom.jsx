import React, { useContext } from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../helpers/AuthProvider';


const NavBarCustom = () => {
  const authContext = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    authContext.setIsLoggedIn(false);
    authContext.setAuthToken(null); 

  };

  const navBarItems = [
    {route : '/leagues', name : 'Mis Tableros'},
    {route : '/pickem', name : 'Picks'}
  ]
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            LOGGED
          </Navbar.Brand>
          <Navbar.Collapse>
          
            {navBarItems?.map((item, index) => (
              
              <Nav key={index} className='ml-auto'>
                <Nav.Link href={item.route}>{item.name}</Nav.Link>
              </Nav>
            ))}
         
          
          </Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={handleLogout} href="/">Loggout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCustom