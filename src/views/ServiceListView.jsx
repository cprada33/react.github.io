import { useParams } from "react-router-dom"
import ItemListContainer from "../components/Items/ItemListContainer"

const ServiceListView = () => {
  const {categoria} = useParams();
  console.log(categoria)

  return (
    <>
    <h1>{categoria}</h1>
    <ItemListContainer/>
    </>
  )
}

export default ServiceListView