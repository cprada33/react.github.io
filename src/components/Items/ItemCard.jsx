import Card from 'react-bootstrap/Card';

const ItemCard = ({infos}) => {
  
  const Cantidad = () => {
    return (
      <div>
        {infos.quantity != undefined ? <Card.Text>
                Cantidad: {infos.quantity}
              </Card.Text> : null}
      </div>
    );
  };

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
              {Cantidad()}
            </Card.Body>
          </Card>
  );
}

export default ItemCard;

