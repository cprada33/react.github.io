import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config"
import ItemCard from "./ItemCard"


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
  return (
    <>
      <ItemCard infos = {servicio}/>
      <div className='cantidadProductos'>
        <button onClick={() => setContador(contador - 1)} >-</button>
        <Card.Text>
        {contador}
        </Card.Text>
        <button onClick={() => setContador(contador + 1)} >+</button>
      </div>
    </>
  )
}

export default ItemDetailContainer