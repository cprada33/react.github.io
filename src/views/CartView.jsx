import ItemCard from "../components/Items/ItemCard"
import { useContext } from "react"
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";


const CartView = () => {
  const { cart, precioTotal } = useContext(CartContext);
 
  return (
    <>
    <h1>Cart ({cart.length})</h1>
    <div className="itemCart">
    {cart.map((item) => (
        <ItemCard key={item.id} infos={item} />
      ))}
      {/* <div>
      <p>Cantidad: {precioTotal}</p>
      </div> */}
    </div>
    <h2> Precio total: 
      {precioTotal}
    </h2>
    <Link to = {`/CheckOut`}><button src>Hacer checkout</button></Link>
    </>
  )
}

export default CartView