import ItemCard from "./ItemCard"
import { useEffect, useState } from "react"
import { collection, getDocs} from 'firebase/firestore'
import { db } from "../../firebase/firebase.config"
// import { useParams } from "react-router-dom"

 const ItemListContainer = () => {
  // const { id } = useParams;
  const [servicios, setServicios] = useState([]);

  useEffect(()=> {
  const serviciosCollection = collection(db, 'Servicios');
  getDocs(serviciosCollection).then((datos)=>{
    const docs = datos.docs.map((doc)=> doc.data());
    setServicios(docs);
    console.log(docs);
  });
 }, []);

  return (
    <>
      <ItemCard/>
      <div>
        {servicios.map ((prod) => ( 
          <div key={prod.id}> 
            <h4>{prod.nombre} </h4> 
            <p>$ {prod.precio}</p> 
          </div>
      ))}
      </div>
  </>
 )};

export default ItemListContainer;