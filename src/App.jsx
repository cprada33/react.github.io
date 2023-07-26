import './App.css'
import NavBar from './components/Main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Footer from './components/Main/Footer';
import ItemDetailView from './views/ItemDetailView';
import CartView from './views/CartView';
import ServiceListView from './views/ServicelistView';
import CartProvider from './context/CartProvider';
import CheckoutView from './views/CheckOutView';

function App() {
  return (
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<HomeView/>} />
          <Route path='/item/:id' element={<ItemDetailView/>}/>
          <Route path='/servicios/:categoria' element={<ServiceListView/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/CheckOut'  element={<CheckoutView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
