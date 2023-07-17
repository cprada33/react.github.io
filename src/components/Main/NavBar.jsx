import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
          <Link to={`/servicios/${'habitacion'}`}>Habitaciones</Link>
          <Link to={`/servicios/${'actividad extrema'}`}>Actividades extremas</Link>
          <Link to={`/servicios/${'restaurante'}`}>Restaurante</Link>
          </div>
        </Container>
        <Link to= {'/cart'}><CartWidget/></Link>
      </Navbar>
    </>
  )
}

export default NavBar