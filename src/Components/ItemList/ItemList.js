import Card from "../Card/card";


const ItemList = ({productos}) => {
    

    return (
        productos.map( (productos) => {
                return(
                        <div key = {productos.id}> 
                                {/* //Llamamos a la card que va a mostrar la info de cada producto */}
                                <Card image={productos.image} title={productos.title} price={productos.price} id={productos.id}  />
                            
                        </div>
            )
            })
            
    )
}

export default ItemList