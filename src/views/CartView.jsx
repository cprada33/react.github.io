import ItemCard from "../components/Items/ItemCard"
import { useContext } from "react"
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";


const CartView = () => {
  const { cart, precioTotal } = useContext(CartContext);
 
  const totalElements = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
    <h1>Cart ({totalElements})</h1>
    <div className="itemCart">
    {cart.map((item) => (
        <ItemCard key={item.id} infos={item} />
      ))}
    </div>
    <h2 className="precioTotal"> Precio total: 
      ${precioTotal} COP
    </h2>
    <Link to = {`/CheckOut`}><button className="buttonCheckout">Hacer checkout</button></Link>
    </>
  )
}

export default CartView