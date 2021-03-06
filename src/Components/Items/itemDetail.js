import ItemCount from "../ItemCount/itemCount"
import './itemDetail.css'
import { Button } from "@mui/material"
import { useState } from "react"
import {Link} from 'react-router-dom';




const ItemDetail = ({atributo}) => {
    const [cantidad, setCantidad] = useState(1)

    //Estado para mostrar botón de terminar compra
    const [showButton, setShowButton] = useState(false)

    const irAPagar = () => {
        console.log("Productos a pagar: ", atributo.title)
        console.log("Precio: ", atributo.price)
        // console.log("Cantidad: ", cantidad)
    }

    return (
        <>
            <hr></hr>
            
             <section className="section_detail">
                
                <div className="image_detail">
                    <img src={`/${atributo.image}`} />
                </div>
                <div className="contain_data_detail">
                    <div>
                        <p className="title_detail"> {atributo.title}</p>
                        <p className="info_detail">Con la compra de cada prenda, ayudas a los animales no humanos que viven en Santuario Salvajes. El porcentaje de donación es el 20% de cada prenda. <br></br> Muchas gracias por colaborar!</p>
                        <p className="price_detail">{atributo.price}</p>
                    </div>
                    <div className="itemCount_detail"></div>
                        {/* llamada al contador */}
                    {
                        showButton == false ?
                        <ItemCount
                        mostrarCantidad = {setCantidad}
                        setShowButton={setShowButton}
                        infoProducto={atributo}
                        /> 
                        :
                    
                    
                        <Button variant="contained" onClick={irAPagar}>
                            <Link to='/cart' style={{textDecoration: 'none', color:'white' }}>
                                Ir a pagar
                            </Link>
                        </Button>
                    }
                </div>
            </section>
            

            
            
            
            
        </>
    )

}

export default ItemDetail