import './NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCart from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartContext from '../../context/cartContext';



const NavBar = () => {
    const {clearCart} = React.useContext(CartContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    return(
        <>
        <AppBar position="sticky">
        <Toolbar className='barContained'>
            <Link to='/'><img src='/LOGOfam.jpg'></img></Link>
            <div className='buttonContained'>

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    disableFocusRipple
                    style ={{backgroundColor: 'transparent'}}
                    variant = 'text'
                >
                    Productos
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
                    <MenuItem onClick={handleClose}><Link to = '/productos/lisa' >Remeras Lisas </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = '/productos/batik' >Remeras Batik </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = '/productos/buzo' >Buzos </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = '/' >Todos los productos </Link></MenuItem>
                </Menu>


                <Button ><Link to='/santuario' style={{textDecoration: 'none', color:'white'}}>Santuario Salvajes</Link></Button>
                <Button><Link to='/nosotrxs' style={{textDecoration: 'none', color:'white'}}>Nosotrxs</Link></Button>
                
            </div>
            <Button onClick={clearCart} id='clear_cart' style={{textDecoration: 'none', color:'white'}}>Borrar carrito</Button>
            <Button id='cart_button'><ShoppingCart/></Button>

        </Toolbar>
      </AppBar>
      </>
        
    )    
}

export default NavBar




