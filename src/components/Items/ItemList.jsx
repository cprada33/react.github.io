import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


 const ItemList = ({servicios}) => {
  return (
  <>
          <div className="itemlist">
            {servicios.map ((prod) => { 
                return (
                <div key={prod.target}>
                <Link to = {`/item/${prod.id}`}>
                  <ItemCard infos = {prod} />
                  <Button variant="primary">Detalles del producto</Button>{' '}
                </Link>
                </div>
        )})}
        </div>
  </>
 )};

export default ItemList;