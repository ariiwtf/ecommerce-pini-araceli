import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import CartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const ShoppingCart = () => {

    const {cartListItems} = useContext(CartContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


    return(<>
                
                
                <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >   <Link to='/cart'>
                <p className='cart_button'>
                    <ShoppingCartIcon/>
                </p>
                </Link>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='containerItemProduct'>
                    {cartListItems.length === 0 && (<><h4>No hay productos en el carrito</h4>
                                                        <Link to='/'><Button style ={{backgroundColor: 'transparent' , color:'blueviolet'}}>Agregar</Button></Link></>)}
                    {cartListItems.map( (item)=> {
                        return(
                            <div>
                                <div key ={item.id} className='eachItem'>
                                    <img src={`/${item.image}`} alt='fotoProducto'></img>
                                    
                                    <div className='titleItem'>
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                        <p>Cant:</p>

                                        <div className='btnDelete'>
                                        <DeleteIcon />
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                                    <hr></hr>
                            
                            </div>
                        )
                    })}
                </div>
            </Menu>
            </div>
    </>
        
    )
}

export default ShoppingCart