import { useEffect, useState } from "react"
import { collection, getDocs} from 'firebase/firestore'
import { db } from "../../firebase/firebase.config"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const {categoria} = useParams();     
    const [servicios, setServicios] = useState([]);

    useEffect(()=> {
    const serviciosCollection = collection(db, 'Servicios');
    getDocs(serviciosCollection).then((datos)=>{
      const docs = datos.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
      }));
      setServicios(docs);
    });
   }, []);
   
   const serviceFilter = servicios.filter((servicio) => servicio.categoria === categoria)
  return (
    <>
        {categoria ? <ItemList servicios = {serviceFilter} /> : <ItemList servicios = {servicios} />}
    </>
  )
}

export default ItemListContainer