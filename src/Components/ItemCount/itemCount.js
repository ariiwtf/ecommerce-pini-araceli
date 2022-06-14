import { Button } from '@mui/material'
import { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './itemCount.css'
import CartContext from '../../context/cartContext';

const ItemCount = ({ mostrarCantidad , setShowButton , infoProducto}) => {

    const { addProductToCart , addCount } = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState (7)



    // const addCount = () => {
    //     setCount(count +1)
    //     setStock(stock -1)
    //     mostrarCantidad(count +1)
    // }

    const removeCount = () => {
        setCount(count-1)
        setStock(stock+1)
        mostrarCantidad(count -1)
    }

    const onAdd = () => {
        setShowButton(true)
        console.log("Añadiste al carrito " +(count)+ " remeras")
    }


    return(
        <>
        <div id='div_count'>
            <hr></hr>
            <button onClick={removeCount} disabled={count == 0} className='btn-cart'>-</button>
            <span className='count'>{count}</span>
            
            <button onClick={ () => {addCount()}} disabled = {count == 7} className='btn-cart'>+</button>

            {/*seteamos el stock -1 porque contamos la remera a añadir por default*/}
            <p className='stock_card'>Stock: {stock -1}</p>
            <hr></hr>

            <Button onClick={() => addProductToCart(infoProducto)} id='addToCart' variant="contained">
                <ShoppingCartIcon/> Añadir al carrito
            </Button>
            </div>
        </>

    )
}

export default ItemCount
