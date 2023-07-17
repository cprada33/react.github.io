import './App.css'
import NavBar from './components/Main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Footer from './components/Main/Footer';
import ItemDetailView from './views/ItemDetailView';
import CartView from './views/CartView';
import ServiceListView from './views/ServicelistView';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<HomeView/>} />
          <Route path='/item/:id' element={<ItemDetailView/>}/>
          <Route path='/servicios/:categoria' element={<ServiceListView/>}/>
          <Route path='cart' element={<CartView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
