import '../Card/card.css'
import Card from "../Card/card"
import { useState , useEffect } from 'react'
import { Grid } from '@mui/material'
import ItemList from '../ItemList/ItemList'
import productos from '../lista_productos.js/lista_productos'

const ItemListContainer = ({title}) =>{

    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)


    //Promesa para exhibir los productos
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve ( productos )
            }, 3000)
        })
    }

    useEffect( () => {
         //llamada a la function promesa
    getProducts()
    .then((response) => {
        
        setProd(response)
    })
    .finally( () => {
        
    })
    }, [])
   

    return(
        <  > 
        <h1 className='title_cardList'>{title}</h1>
        {console.log("Productos: ",prod)} 
        <Grid 
        container spacing = {2}  
        className='gridCards'>
        {
            <ItemList productos = {prod}/>
        }
        </Grid>
        </>
    )
} 

export default ItemListContainer

