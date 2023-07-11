import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar className='NavBar'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt="logo"
              src="src/assets/logoabyayala.png"
              width="300"
              height="auto"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <div className='categorias'>
          <Nav.Link href="#home">Habitaciones</Nav.Link>
          <Nav.Link href="#link">Actividades extremas</Nav.Link>
          <Nav.Link href="#link">Restaurante</Nav.Link>
          </div>
        </Container>
        <Link to= {'/cart'}><CartWidget/></Link>
      </Navbar>
    </>
  )
}

export default NavBar