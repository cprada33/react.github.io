import Card from 'react-bootstrap/Card';

const ItemCard = ({infos}) => {

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
            </Card.Body>
          </Card>
  );
}

export default ItemCard;

