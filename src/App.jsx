import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Header/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/servicios:categoria' element = {<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
