import './App.css'
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from './components/Main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Footer from './components/Main/Footer';
import ItemDetailView from './views/ItemDetailView';
import CartView from './views/CartView';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<HomeView/>} />
          <Route path='/servicios:categoria' element = {<ItemListContainer/>}/>
          <Route path='/item:id' element={<ItemDetailView/>}/>
          <Route path='cart' element={<CartView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
