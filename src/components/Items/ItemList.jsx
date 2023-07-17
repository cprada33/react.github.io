import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

 const ItemList = ({servicios}) => {

  return (
  <>
          <div className="itemlist">
            {servicios.map ((prod) => { 
                return (
                <div key={prod.id}>
                <Link to = {`/item/${prod.id}`}>
                  <ItemCard infos = {prod} />
                </Link>
                </div>
        )})}
        </div>
  </>
 )};

export default ItemList;