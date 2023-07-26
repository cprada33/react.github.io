import { useContext } from "react"
import { CartContext } from "../../context/CartProvider";

const CartWidget = () => {
  const { cart } = useContext(CartContext );

  return (
    <>
        <div className="cartWidget">
            <i className="bi bi-cart4"></i>
            <p className="contador">{cart.length}</p>
        </div>
    </>
  )
}

export default CartWidget