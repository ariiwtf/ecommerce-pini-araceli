import productos from "../lista_productos.js/lista_productos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Grid } from '@mui/material'
import ItemList from '../ItemList/ItemList'


const CategoryContainer = () => {

    const [prod, setProductos] = useState([])
    const {category} = useParams()
    
    useEffect( () => {
        setProductos([])
        
        getProductsList()
        .then((response) => {
            filterByCategory(response)
        })
    }, [category])
    

    const getProductsList = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve ( productos )
            }, 500)
        })
    }

    const filterByCategory = (array) => {

        return array.map( (item) => {
            if (item.category == category){
                return setProductos(prod => [...prod, item])
            }
        })
    }

    return (
        <>
            <div>Category Container</div>
        <h1 className='title_cardList'>{category}</h1>
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

export default CategoryContainer