import { Button } from '@mui/material'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './itemCount.css'

const ItemCount = () => {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState (7)

    const addCount = () => {
        setCount(count +1)
        setStock(stock -1)
    }

    const removeCount = () => {
        setCount(count-1)
        setStock(stock+1)
    }

    const onAdd = () => {
        alert("Añadiste al carrito " +(count)+ " remeras")
    }


    return(
        <>
        <div id='div_count'>
            <hr></hr>
            <button onClick={removeCount} disabled={count == 0} className='btn-cart'>-</button>
            <span className='count'>{count}</span>
            
            <button onClick={addCount} disabled = {count == 7} className='btn-cart'>+</button>

            {/*seteamos el stock -1 porque contamos la remera a añadir por default*/}
            <p className='stock_card'>Stock: {stock -1}</p>
            <hr></hr>
        {/* </div> */}

        
            <Button onClick={onAdd} id='addToCart' variant="contained"> <ShoppingCartIcon></ShoppingCartIcon> Añadir al carrito</Button>
            </div>
        </>

    )
}

export default ItemCount
