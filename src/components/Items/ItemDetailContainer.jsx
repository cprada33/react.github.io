import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config"
import ItemCard from "./ItemCard"
import { useContext } from "react"
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartProvider";

const ItemDetailContainer = () => {
    const {id} = useParams()

  const [servicio, setServicio] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(()=> { 

  const servicioDoc = doc(db, 'Servicios', `${id}`);
  getDoc(servicioDoc).then((datos)=>{
    const doc = datos.data(); 
    setServicio(doc);
    console.log(datos)
  });
 }, [id]);

 const {setCart, setPrecio, precioTotal} = useContext(CartContext);


 const agregarCarrito = () => {
     setCart((currItems) => {
       const isItemFound = currItems.find((item) => item.id === id);
       if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            setPrecio(precioTotal + parseInt(item.precio))
            return {...item, quantity: item.quantity + 1 }
          } else {
            setPrecio(precioTotal + parseInt(item.precio))
            return item;
          }
        });
       } else {
        setPrecio(precioTotal + parseInt(servicio.precio))
        return [...currItems, servicio]
       }
        
     })
 } 

  return (
    <>
      <img className="imgServicio" src = {servicio.img} alt="imagen" />
      <ItemCard infos = {servicio}/>
      <div className='cantidadProductos'>
        <button onClick={contador >= 0 ? () => setContador(contador - 1) : setContador(contador +1)} >-</button>
        <Card.Text>
        {contador}
        </Card.Text>
        <button onClick={() => setContador(contador + 1)} >+</button>
        <Button onClick={ () => agregarCarrito()} variant="primary">Agregar al carrito</Button>{' '}
      </div>
    </>
  )
}

export default ItemDetailContainer