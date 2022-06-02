import ItemDetail from "./itemDetail"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import productos from "../lista_productos.js/lista_productos"
import './itemDetail.css'


const ItemDetailContainer = () => {

    console.log(useParams())
    const {id} = useParams()
    const [prod , setProd] = useState({})

    const getItem = () => {
            //Promesa
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve ( productos )
                    // el parámetro del resolve era prod1, que es un objeto producto creado en lista_productos.js
                    
                }, 1000)
            })
    }
    //hook
    useEffect( () => {
        getItem()
            .then( (res) => {
                const findProductId = res.find((prod) => {
                    return prod.id == id
                })
                console.log ("ItemDetailContainer: ",res)
                setProd(findProductId);
            })
    }, [])

    return (
        <>
            <hr></hr>
            <div className="detail_title">El producto en detalle</div>
            <ItemDetail atributo={prod}/>
        </>
    )


}

export default ItemDetailContainer