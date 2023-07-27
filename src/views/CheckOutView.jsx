import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ItemCard from "../components/Items/ItemCard"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartProvider";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

const CheckoutView = () => {
  const { cart, precioTotal } = useContext(CartContext);
  const [ orderID, setOrderID] = useState();
  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();

  const order = {
    name, 
    email,
  };

  const ordersCollection = collection(db, 'orders');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({id}) => setOrderID(id))
  };

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
    <Form className='formCheckout' onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Enter ename" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="Celular" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
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
      <div>
        <h2>Confirmación de orden de compra</h2>
        <p>Número: {orderID}</p>
      </div>
    </>
  )
}

export default CheckoutView