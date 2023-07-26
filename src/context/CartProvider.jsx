import { createContext, useState } from "react";
export const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
  
    const [precioTotal, setPrecio] = useState(0);

    console.log(cart)

    return (
    <CartContext.Provider value={{ cart, setCart, precioTotal, setPrecio }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider