import ItemCard from "./ItemCard"
import { useEffect, useState } from "react"
import { collection, getDocs} from 'firebase/firestore'
import { db } from "../../firebase/firebase.config"
// import { useParams } from "react-router-dom"

 const ItemListContainer = () => {
  // const { id } = useParams;
  const [servicios, setServicios] = useState([]);

  useEffect(()=> {
  const serviciosCollection = collection(db, 'servicios');
  getDocs(serviciosCollection).then((datos)=>{
    const res = datos.res.map((respuesta)=> respuesta.data());
    console.log(res);
    setServicios(res);
  })
 });

  return (
    <>
      <ItemCard/>
      <div>
        {servicios.map ((prod) => ( 
          <div key={prod.categoria}> 
          <h4>Cabaña: {prod.habitacion} </h4> 
          <p>$ {prod.precio}</p> 
          </div>
      ))}
      </div>
  </>
 )};

export default ItemListContainer;