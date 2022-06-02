import ItemCount from "../ItemCount/itemCount"
import './itemDetail.css'


const ItemDetail = ({atributo}) => {
    console.log("Atributo: " + atributo)
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
                    <div className="itemCount_detail">
                        {/* llamada al contador */}
                        <ItemCount></ItemCount>
                    </div>
                </div>
            </section>
            

            
            
            
            
        </>
    )

}

export default ItemDetail