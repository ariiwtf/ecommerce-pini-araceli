import './card.css'
import ItemCount from '../ItemCount/itemCount'
import { Button  } from '@mui/material'
import { Link } from 'react-router-dom'

const Card = ({image, title, price, id}) => {
    

    return (
        
        <div className='cardContainer'>
            <div>
                <img className='imagen' src={`/${image}`}  />
            </div>
            <div className='dataCard'>
            <h3>{title} </h3>
            <h3>{price}</h3>
            </div>
            <Button style={{color: 'white' , backgroundColor: 'black', width: '100%'}}>
                <Link to={ `/producto/${id}`} style={{textDecoration: 'none', color:'white'}}>
                Ver detalle
                </Link>
                </Button>
            <ItemCount></ItemCount>
        </div>
    )
}

export default Card