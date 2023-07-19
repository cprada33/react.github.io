// import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = ({infos}) => {
  // const [contador, setContador] = useState(0);
  console.log(infos)
  return ( 
          <Card>
            <Card.Body>
              <Card.Title>{infos.nombre}</Card.Title>
              <Card.Text>
                {infos.descripcion}
              </Card.Text>
              <Card.Text>
                {infos.precio}
              </Card.Text>
              <Button variant="primary">Detalles del producto</Button>{' '}
            </Card.Body>
          </Card>
  );
}

export default ItemCard;

