// import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = ({infos}) => {
  // const [contador, setContador] = useState(0);

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

              {/* <div className='cantidadProductos'>
                <button onClick={() => setContador(contador - 1)} >-</button>
                <Card.Text>
                  {contador}
                </Card.Text>
                <button onClick={() => setContador(contador + 1)} >+</button>
              </div> */}