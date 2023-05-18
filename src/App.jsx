import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "BIENVENIDOS AL MEJOR HOSTEL DE COLOMBIA" />
    </div>
  )
}

export default App
