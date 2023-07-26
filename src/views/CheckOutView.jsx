import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ItemCard from "../components/Items/ItemCard"
import { useContext } from "react"
import { CartContext } from "../context/CartProvider";

const CheckoutView = () => {
  const { cart, precioTotal } = useContext(CartContext);

  return (
    <>
    <h1>Checkout</h1>
    <h2>Order Summary</h2>
    <div className="itemCart">
    {cart.map((item) => (
        <ItemCard key={item.id} infos={item} />
      ))}
    </div>
    <h2>Shipping Information</h2>
    <Form className='formCheckout'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Enter ename" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="Celular" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" placeholder="Correo" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Dirección de entrega</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <h3>Precio total: ${precioTotal} COP</h3>

      <Button variant="primary" type="submit">
        Enviar orden
      </Button>
    </Form>

    </>
  )
}

export default CheckoutView