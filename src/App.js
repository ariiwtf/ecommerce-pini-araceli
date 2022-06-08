import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Santuario from './pages/Santuario';
import Nosotrxs from './pages/Nosotrxs';
import NotFound from './pages/NotFound';
import DetalleProducto from './pages/detalleProducto';
import CategoryContainer from './Components/category/categoryContainer';
import Cart from './pages/cart';
import { CartProvider } from './context/cartContext';





function App() {
  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={  <Home /> }></Route>
          <Route path='/producto/:id' element = {<DetalleProducto/>}>  </Route>
          <Route path='/productos/:category' element = { <CategoryContainer/>} ></Route>
          <Route path='/santuario' element={ <Santuario />}></Route>
          <Route path='/nosotrxs' element={ <Nosotrxs />}></Route>
          <Route path='*' element={ <NotFound />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
     </CartProvider>
     
    </div>
    
  );
}

export default App;
