import { createContext , useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems , setCartListItems] = useState([])

    const addProductToCart = (product) => {
        
        console.log("producto agregado: ", product)
        let isInCart = cartListItems.find( cartItem => cartItem.id === product.id )
        
        if (!isInCart){
            return setCartListItems( cartListItems => [...cartListItems,product])
            
        }
    }

    const removeItem = (id) =>{
        const newCart = cartListItems.filter((product) => product.id !== id)
        setCartListItems(newCart)
        console.log(newCart)
    }

    const clearCart = (id) => {
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeItem,
        clearCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}