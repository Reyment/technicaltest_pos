import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Product, { products } from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './Contexts/CartContext';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeAccount from './pages/account';


function App() {
  return (
    <BrowserRouter >
        <CartProvider>
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/product/:id' element={<ProductDetail />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/' element={<Login />} />
            {/* <Route exact path='/home' element={<HomeAccount />} /> */}
          </Routes>
        </CartProvider>

    </BrowserRouter>
  );
}

export default App;
