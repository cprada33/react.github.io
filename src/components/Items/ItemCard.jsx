import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ItemCard() {
  const [contador, setContador] = useState(0);

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1  }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Link to={'/item/${id}'}>
              <Card.Title>Nombre del producto</Card.Title>
              </Link>
              <Card.Text>
                Descripción
              </Card.Text>
              <Button variant="primary">Detalles del producto</Button>{' '}
              <div className='cantidadProductos'>
                <button onClick={() => setContador(contador - 1)} >-</button>
                <Card.Text>
                  {contador}
                </Card.Text>
                <button onClick={() => setContador(contador + 1)} >+</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ItemCard;